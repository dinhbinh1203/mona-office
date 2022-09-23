import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import Introduce from '../../components/Introduce/Introduce';
import { useEffect, useState } from 'react';
import productsApi from '../../api/productsApi';
import ListProductHome from '../../components/ListProductHome/ListProductHome';
import ProductNew from '../../components/Product/ProductNew/ProductNew';
import newsApi from '../../api/newsApi';
import images from '../../assets/images';

const cx = classNames.bind(styles);
const INTRODUCE = [
  {
    id: 1,
    title: 'Chất lượng tốt nhất',
    icon: 'verified',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
  {
    id: 2,
    title: 'Giá cả phù hợp',
    icon: 'paid',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
  {
    id: 3,
    title: 'Sản phẩm đa dạng',
    icon: 'edit_note',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
  {
    id: 4,
    title: 'Thân thiện môi trường',
    icon: 'nature',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
];

function Home() {
  const [discount, setDiscount] = useState([]);
  const [trendy, setTrendy] = useState([]);
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataApi = await productsApi.getAllProducts();
        const dataDiscount = (data) =>
          data.filter((item) => item.discount === true);
        setDiscount(dataDiscount(dataApi));

        const dataTrendy = (data) =>
          data.filter((item) => item.trendy === true);
        setTrendy(dataTrendy(dataApi));

        const dataNews = await newsApi.getAllNews();
        setListNews(dataNews);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="grid ">
        <div>
          <SlickSlider />
        </div>
      </div>

      <div className="grid wide">
        <ListProductHome title="Sản phẩm giảm giá" products={discount} />
      </div>
      <div className="grid wide">
        <ListProductHome title="Sản phẩm bán chạy" products={trendy} />
      </div>
      <div className={cx('grid', 'home__introduce')}>
        <div className={cx('grid', 'wide')}>
          <div className={cx('row')}>
            {INTRODUCE.map((item) => (
              <div
                className={cx('col', 'c-6', 'm-3', 'l-3', 'introduce-item')}
                key={item.id}
              >
                <Introduce item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid wide">
        <div className={cx('row', 'title__news')}>Tin mới nhất</div>
        <div className="row">
          {listNews.map((newItem) => (
            <a href={`/news/${newItem.id}`} className="col c-12 l-4 m-4">
              <ProductNew newItem={newItem} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
