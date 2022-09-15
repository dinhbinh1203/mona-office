import { Routes, Route } from 'react-router-dom';

import AdminProductEdit from './AdminProductEdit/AdminProductEdit';
import AdminCategories from './AdminCategories/AdminCategories';
import AdminProductAdd from './AdminProductAdd/AdminProductAdd';

function Admin() {
  return (
    <Routes>
      <Route index element={<AdminCategories />} />
      <Route path="add" element={<AdminProductAdd />} />
      <Route path="edit/:id" element={<AdminProductEdit />} />
    </Routes>
  );
}

export default Admin;
