import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import productsApi from '../../../api/productsApi';
import ProductForm from '../../../features/ProductForm/ProductForm';

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
          nameSubmit="Cập nhật"
        />
      )}
    </div>
  );
}

export default AdminProductEdit;
