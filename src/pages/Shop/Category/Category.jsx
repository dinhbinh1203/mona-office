import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  selectProducts,
  selectProductsIsLoading,
} from '../../../store/products/products.selector';
import {
  selectCategoriesIsLoading,
  selectCategories,
} from '../../../store/categories/categories.selector';

import Loading from '../../../components/Loading/Loading';
import ProductUser from '../../../components/ProductUser/ProductUser';

import styles from './Category.module.scss';
import classNames from 'classnames/bind';

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
    categories.find(({ title }) => title === changeDashToSpace(name));

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
            {products !== undefined &&
              categories !== undefined &&
              products
                .filter((list) => list.categoryId === category(categories))
                .map((item) => (
                  <a
                    href={`/shop/product/${changeSpaceToDash(item.name)}`}
                    className="col c-6 m-6 l-3"
                  >
                    <div key={item.id}>
                      <ProductUser
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
