import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Pagination } from '@mui/material';
import {
  fetchProductsStart,
  setFilterStart,
} from '../../store/products/products.action';
import {
  selectProducts,
  selectProductsIsLoading,
  selectProductsFilter,
  selectProductsPagination,
} from '../../store/products/products.selector';
import {
  selectCategories,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';

import Loading from '../Loading/Loading';
import styles from './Categories.module.scss';
import classNames from 'classnames/bind';

import Product from '../Product/Product';

import productsApi from '../../api/productsApi';

const cx = classNames.bind(styles);

function Categories() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  const products = useSelector(selectProducts);
  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const filter = useSelector(selectProductsFilter);
  const pagination = useSelector(selectProductsPagination);

  console.log('filter', filter);

  useEffect(() => {
    dispatch(fetchProductsStart(filter));
  }, [dispatch, filter]);

  const handlePageChange = (e, page) => {
    dispatch(
      setFilterStart({
        ...filter,
        _page: page,
      }),
    );
  };

  const changeSpaceToDash = (str) => {
    return str.replaceAll('-', ' ');
  };

  const _totalRows = 47;

  return (
    <div className="grid wide">
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is__loading')}>
          <Loading />
        </div>
      ) : (
        <div>
          <div className={cx('products', 'row')}>
            {products !== undefined &&
              products.map((item) => (
                <a
                  href={`/shop/product/${changeSpaceToDash(item.name)}`}
                  className="col c-6 m-6 l-3"
                  key={item.id}
                >
                  <div>
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
          <Pagination
            count={Math.ceil(_totalRows / pagination._limit)}
            page={pagination._page}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default Categories;
