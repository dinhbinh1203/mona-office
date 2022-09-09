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

  return (
    <div className="grid wide">
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is-loading')}>
          <Loading />
        </div>
      ) : (
        // <div className={cx('categories-container')}>
        //   <div className={cx('categories-menu')}>
        //     {categories.data !== undefined &&
        //       categories.data.map((item) => (
        //         <Link to={`/shop/${item.id}`} data={item}>
        //           <div key={item.id} className={cx('menu-item')}>
        //             {item.title}
        //           </div>
        //         </Link>
        //       ))}
        //   </div>

        <div className={cx('products', 'row')}>
          {products.data !== undefined &&
            products.data.map((item) => (
              <Link
                to={`/shop/product/${item.name}`}
                className="col c-6 m-6 l-3"
              >
                {/* <div key={item.id}>{item.name}</div> */}
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
              </Link>
            ))}
        </div>
        // </div>
      )}
    </div>
  );
}

export default Categories;
