import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
import CategoriesFilters from '../../../features/Categories/CategoriesFilters';
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
    <>
      {isLoadingProducts || isLoadingCategories ? (
        <Loading />
      ) : (
        <div className={cx('categories', 'grid', 'wide')}>
          <div className={cx('row', 'title')}>
            <div className={cx('col', 'c-12', 'l-12', 'm-12')}>
              <a href="/" className={cx('title__main')}>
                Trang ch???
              </a>
              <span className={cx('title__divider')}>/</span>
              <a href="/shop" className={cx('title__extra')}>
                T???t c??? s???n ph???m c???a MONA
              </a>
            </div>
          </div>
          <div className={cx('row', 'filter')}>
            <div className={cx('filter__title', 'col', 'c-12', 'l-2', 'm-2')}>
              <span className="material-symbols-outlined">filter_alt</span>
              <p>B??? l???c</p>
            </div>
            <div className={cx('col', 'c-12', 'l-10', 'm-10')}>
              <CategoriesFilters
                filter={filter}
                categories={categories}
                onChange={handleFilterChange}
                total={handleTotal}
              />
            </div>
          </div>

          {products !== undefined && <ListProducts products={products} />}

          <Pagination
            count={Math.ceil(total / pagination._limit)}
            page={pagination._page}
            onChange={handlePageChange}
            className={cx('page__pagination')}
          />
        </div>
      )}
    </>
  );
}

export default Categories;
