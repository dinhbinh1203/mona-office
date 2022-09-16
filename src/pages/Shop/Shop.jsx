import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from './Categories/Categories';
import Category from './Category/Category';
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import ProductDetail from './ProductDetails/ProductDetail';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":id/*" element={<Category />} />
      <Route path="product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default Shop;
