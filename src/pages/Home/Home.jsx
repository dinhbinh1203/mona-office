import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import Introduce from '../../components/Introduce/Introduce';
import usersApi from '../../api/usersApi';
import ordersApi from '../../api/ordersApi';
import purchasesApi from '../../api/purchasesApi';
import Select from '../../components/Select/Select';

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
  // const data = purchasesApi.remove('ZuWTh0BvRATbItevvJhuiDlGdcS2');

  return (
    <div>
      <div className="grid ">
        <SlickSlider />
      </div>
      <div className="grid wide">{/* <Select /> */}</div>
      <div className={cx('grid', 'home-introduce')}>
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
    </div>
  );
}

export default Home;
