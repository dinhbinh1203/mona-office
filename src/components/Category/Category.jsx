import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import {
  selectProducts,
  selectProductsIsLoading,
} from '../../store/products/products.selector';
import {
  selectCategoriesIsLoading,
  selectCategories,
} from '../../store/categories/categories.selector';

import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Category() {
  const { id } = useParams();

  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  return (
    <div className="grid wide">
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is-loading')}>
          <Loading />
        </div>
      ) : (
        <div className={cx('products')}>
          {products.data !== undefined &&
            products.data
              .filter((list) => list.categoryId === Number(id))
              .map((item) => (
                <Link to={`/shop/product/${item.name}`}>
                  <div key={item.id}>{item.name}</div>
                </Link>
              ))}
        </div>
      )}
    </div>
  );
}

export default Category;
