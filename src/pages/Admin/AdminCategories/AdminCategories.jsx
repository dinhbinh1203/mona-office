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
  selectCategoriesOptions,
} from '../../../store/categories/categories.selector';

import Loading from '../../../components/Loading/Loading';
import CategoriesFilters from '../../../features/categories/CategoriesFilters';

import styles from './AdminCategories.module.scss';
import classNames from 'classnames/bind';
import productsApi from '../../../api/productsApi';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { default as ButtonDefault } from '../../../components/Button/Button';

import ProductAdmin from '../../../components/ProductAdmin/ProductAdmin';

import { Navigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AdminCategories() {
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

  const handleRemoveProduct = async (product) => {
    try {
      await productsApi.remove(product.id || '');
      const newFilter = { ...filter };
      dispatch(setFilterStart(newFilter));
    } catch (error) {
      console.log('Failed to fetch student', error);
    }
    console.log('handleRemoveProduct');
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedProduct, setSelectedProduct] = useState();

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);

    console.log(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseRemove = (selectedProduct) => {
    setOpen(false);
    handleRemoveProduct(selectedProduct);
    console.log('selectedProduct', selectedProduct);
  };

  const handleEditProduct = async (product) => {
    // push(`/admin/categories/edit/${product.id}`);
    console.log(product);
    <Navigate to={`/admin/categories/edit/${product.id}`} />;
  };

  return (
    <>
      <div className={cx('categories', 'grid', 'wide')}>
        {isLoadingProducts || isLoadingCategories ? (
          <div className={cx('is__loading')}>
            <Loading />
          </div>
        ) : (
          <>
            <div className={cx('row')}>
              <div
                className={cx(
                  'categories__title',
                  'col',
                  'c-12',
                  'l-12',
                  'm-12',
                )}
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
                  totalChange={handleTotal}
                />
              </div>
            </div>
            <a href="/admin/categories/add">
              <ButtonDefault primary>Thêm sản phẩm</ButtonDefault>
            </a>
            <div className={cx('products', 'row')}>
              {products !== undefined && (
                <div className="row">
                  {products.map((product) => (
                    <div className="col c-12 l-12 m-12" key={product.id}>
                      {!product.new && <ProductAdmin product={product} />}
                      <div>
                        <a href={`/admin/categories/edit/${product.id}`}>
                          <button onClick={() => handleEditProduct(product)}>
                            Chỉnh sửa sản phẩm
                          </button>
                        </a>
                        <button onClick={() => handleClickOpen(product)}>
                          Xoá sản phẩm
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
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
      <div>
        <Button variant="outlined">Open responsive dialog</Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Xóa sản phẩm</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Bạn có muốn xóa sản phẩm này không ${selectedProduct?.name} không ?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Hủy
            </Button>
            <Button
              onClick={() => handleCloseRemove(selectedProduct)}
              autoFocus
            >
              Có
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default AdminCategories;
