import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import { fetchProductsStart } from '../../store/products/products.action';
import Category from '../../components/Category/Category';
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import ProductDetail from '../../components/ProductDetails/ProductDetail';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":name/*" element={<Category />} />
      <Route path="product/:name" element={<ProductDetail />} />
    </Routes>
  );
}

export default Shop;
