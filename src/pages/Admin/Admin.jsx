import { Routes, Route } from 'react-router-dom';
import AdminAddProduct from './AdminAddProduct/AdminAddProduct';
import AdminProductEdit from './AdminProductEdit/AdminProductEdit';
import AdminCategories from './AdminCategories/AdminCategories';

function Admin() {
  return (
    <Routes>
      <Route index element={<AdminCategories />} />
      <Route path="add" element={<AdminAddProduct />} />
      <Route path="edit" element={<AdminProductEdit />} />
    </Routes>
  );
}

export default Admin;
