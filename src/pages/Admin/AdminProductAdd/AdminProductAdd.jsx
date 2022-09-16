import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import productsApi from '../../../api/productsApi';
import ProductForm from '../../../features/product/ProductForm/ProductForm';
import styles from './AdminProductAdd.module.scss';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function AdminProductAdd() {
  const navigate = useNavigate();

  const handleProductFormSubmit = async (formValues) => {
    await productsApi.add(formValues);
    console.log(formValues);
    toast.success('Thêm sản phẩm thành công');
    setTimeout(() => {
      navigate('/admin/categories');
    }, 1000);
  };

  const initialValues = {
    name: '',
    imageUrl: '',
    prevPrice: '',
    price: '',
    description: '',
    categoryId: '',
  };

  return (
    <div>
      <ProductForm
        initialValues={initialValues}
        onSubmit={handleProductFormSubmit}
        nameSubmit="Thêm sản phẩm"
      />
    </div>
  );
}

export default AdminProductAdd;
