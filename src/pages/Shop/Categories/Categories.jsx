import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';

import {
  fetchProductsStart,
  setFilterStart,
  setTotalStart,
} from '../../../store/products/products.action';
import {
  selectProducts,
  selectProductsIsLoading,
  selectProductsFilter,
  selectProductsPagination,
  selectProductsTotal,
} from '../../../store/products/products.selector';
import {
  selectCategories,
  selectCategoriesIsLoading,
} from '../../../store/categories/categories.selector';

import Loading from '../../../components/Loading/Loading';
import CategoriesFilters from '../../../features/categories/CategoriesFilters';
import ListProducts from '../../../components/ListProducts/ListProducts';

import styles from './Categories.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Categories() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  const products = useSelector(selectProducts);
  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const filter = useSelector(selectProductsFilter);
  const pagination = useSelector(selectProductsPagination);
  const total = useSelector(selectProductsTotal);

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

  const handleFilterChange = (newFilter) => {
    dispatch(setFilterStart(newFilter));
  };

  const handleTotal = (newFilter) => {
    dispatch(setTotalStart(newFilter));
  };

  return (
    <div className={cx('categories', 'grid', 'wide')}>
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is__loading')}>
          <Loading />
        </div>
      ) : (
        <>
          <div className={cx('row')}>
            <div
              className={cx('categories__title', 'col', 'c-12', 'l-12', 'm-12')}
            >
              <a href="/">Trang chủ</a>/
              <a href="/shop">Tất cả sản phẩm của MONA</a>
            </div>
          </div>
          <div className={cx('row')}>
            <div
              className={cx(
                'categories__filter',
                'col',
                'c-12',
                'l-12',
                'm-12',
              )}
            >
              <div className={cx('categories__filter--title')}>Bộ lọc</div>
              <CategoriesFilters
                filter={filter}
                categories={categories}
                onChange={handleFilterChange}
                total={handleTotal}
              />
            </div>
          </div>

          <div className={cx('products', 'row')}>
            {products !== undefined && (
              <ListProducts products={products} user />
            )}
          </div>
          <Pagination
            count={Math.ceil(total / pagination._limit)}
            page={pagination._page}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default Categories;
