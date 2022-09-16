import { Link, Navigate, useParams, useNavigate } from 'react-router-dom';

import { fetchProductsStart } from '../../../store/products/products.action';
import styles from './AdminProductEdit.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import productsApi from '../../../api/productsApi';
import { useEffect } from 'react';
import ProductForm from '../../../features/product/ProductForm/ProductForm';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
const cx = classNames.bind(styles);

function AdminProductEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const data = await productsApi.getProductById(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const handleProductFormSubmit = async (formValues) => {
    await productsApi.update(formValues);

    toast.success('Cập nhật thành công');
    setTimeout(() => {
      navigate('/admin/categories');
    }, 1000);
  };

  const initialValues = {
    id: product?.id,
    name: product?.name,
    imageUrl: product?.imageUrl,
    prevPrice: product?.prevPrice,
    price: product?.price,
    description: product?.description,
    categoryId: product?.categoryId,
  };

  return (
    <div>
      {(!isEdit || Boolean(product)) && (
        <ProductForm
          initialValues={initialValues}
          onSubmit={handleProductFormSubmit}
        />
      )}
    </div>
  );
}

export default AdminProductEdit;
