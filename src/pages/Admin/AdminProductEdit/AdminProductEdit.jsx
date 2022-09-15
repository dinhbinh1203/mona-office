import { Link, useParams } from 'react-router-dom';

import styles from './AdminProductEdit.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import productsApi from '../../../api/productsApi';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function AdminProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  console.log('productId', id);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const data = await productsApi.getById(id);
        setProduct(data);
      } catch (error) {
        console.log('Failed to fetch student details', error);
      }
    })();
  }, [id]);

  alert(product);
  return <div>AdminProductEdit</div>;
}

export default AdminProductEdit;
