import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

import categoriesApi from '../../../api/categoriesApi';

const cx = classNames.bind(styles);

function Category() {
  const { id } = useParams();

  const [category, setCategory] = useState();
  const isLoading = Boolean(id);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const data = await categoriesApi.getProductCategory(id);
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div>
      {(!isLoading || Boolean(category)) && (
        <div className="grid wide">
          <div className={cx('products', 'row')}>
            {category.map((product) => (
              <a className="col c-6 m-6 l-3" href={`shop/product/${product.id}`}>
                <div key={product.id}>
                  <ProductUser product={product} />
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
