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
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const cx = classNames.bind(styles);

function Category() {
  const { name } = useParams();

  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  const changeSpaceToDash = (str) => {
    return str.replace(/ /g, '-');
  };

  const changeDashToSpace = (str) => {
    return str.replaceAll('-', ' ');
  };

  const isCategory = (categories) =>
    categories.data.find(({ title }) => title === changeDashToSpace(name));

  const category = (categories) => {
    return isCategory(categories).id;
  };

  return (
    <div className="grid wide">
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is-loading')}>
          <Loading />
        </div>
      ) : (
        <div className="grid wide">
          <div>{changeDashToSpace(name)}</div>
          <div className={cx('products', 'row')}>
            {products.data !== undefined &&
              categories.data !== undefined &&
              products.data
                .filter((list) => list.categoryId === category(categories))
                .map((item) => (
                  <a
                    href={`/shop/product/${changeSpaceToDash(item.name)}`}
                    className="col c-6 m-6 l-3"
                  >
                    <div key={item.id}>
                      <Product
                        image={item.imageUrl}
                        title={item.name}
                        prevPrice={item.prevPrice}
                        price={item.price}
                        rent={item.rent}
                        normal={item.normal}
                      />
                    </div>
                  </a>
                ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
