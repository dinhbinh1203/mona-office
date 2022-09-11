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

import styles from './Categories.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const cx = classNames.bind(styles);

function Categories() {
  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  const changeSpaceToDash = (str) => {
    return str.replaceAll('-', ' ');
  };

  return (
    <div className="grid wide">
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is__loading')}>
          <Loading />
        </div>
      ) : (
        <div className={cx('products', 'row')}>
          {products.data !== undefined &&
            products.data.map((item) => (
              <a
                href={`/shop/product/${changeSpaceToDash(item.name)}`}
                className="col c-6 m-6 l-3"
              >
                <div key={item.id}>
                  {!item.new && (
                    <Product
                      image={item.imageUrl}
                      title={item.name}
                      prevPrice={item.prevPrice}
                      price={item.price}
                      rent={item.rent}
                      normal={item.normal}
                    />
                  )}
                </div>
              </a>
            ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
