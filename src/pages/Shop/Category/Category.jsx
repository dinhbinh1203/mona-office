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

  const [category, setCategory] = useState();
  const isLoading = Boolean(id);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await categoriesApi.getProductCategory(id);
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div>
      {!isLoading || Boolean(category) ? (
        <div className="grid wide">
          <div className={cx('products', 'row')}>
            {category !== undefined && (
              <ListProducts products={category} user />
            )}
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Category;
