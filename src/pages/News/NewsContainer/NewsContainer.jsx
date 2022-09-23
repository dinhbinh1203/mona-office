import newsApi from '../../../api/newsApi';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import styles from './NewsContainer.module.scss';
import classNames from 'classnames/bind';
import ProductNew from '../../../components/Product/ProductNew/ProductNew';

const cx = classNames.bind(styles);
function NewsContainer() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await newsApi.getAllNews();
        setNews(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div className="grid wide">
          <div className={cx('row', 'title')}>
            <div className={cx('col', 'c-12', 'l-12', 'm-12')}>
              <a href="/" className={cx('title__main')}>
                Trang chủ
              </a>
              <span className={cx('title__divider')}>/</span>
              <a href="/" className={cx('title__extra')}>
                Tin mới nhất
              </a>
            </div>
          </div>
          <div className="row">
            {news.map((item) => (
              <div className="col c-12 m-4 l-4">
                <a href={`/news/${item.id}`} key={item.id}>
                  <ProductNew newItem={item} key={item.id} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default NewsContainer;
