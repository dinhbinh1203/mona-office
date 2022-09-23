import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import categoriesApi from '../../../api/categoriesApi';
import ListProducts from '../../../components/ListProducts/ListProducts';
import Loading from '../../../components/Loading/Loading';
import styles from './Category.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Category() {
  const { id } = useParams();
  const isLoading = Boolean(id);
  const [category, setCategory] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await categoriesApi.getProductCategory(id);
        const titleFromApi = await categoriesApi.getCategory(id);

        setCategory(data);
        setTitle(titleFromApi.title);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div>
      {!isLoading || Boolean(category) ? (
        <div className="grid wide">
          <div className={cx('row', 'title')}>
            <div className={cx('col', 'c-12', 'l-12', 'm-12')}>
              <a href="/" className={cx('title__main')}>
                Trang chủ
              </a>
              <span className={cx('title__divider')}>/</span>
              <a href="/" className={cx('title__extra')}>
                {title}
              </a>
            </div>
          </div>

          <div className={cx('category')}>
            {category !== undefined && (
              <ListProducts products={category} user />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Category;
