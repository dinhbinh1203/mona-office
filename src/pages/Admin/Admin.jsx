import { Routes, Route } from 'react-router-dom';

import AdminProductEdit from './AdminProductEdit/AdminProductEdit';
import AdminCategories from './AdminCategories/AdminCategories';
import AdminProductAdd from './AdminProductAdd/AdminProductAdd';
import AdminUsers from './AdminUsers/AdminUsers';
import AdminPurchases from './AdminPurchases/AdminPurchases';

function Admin() {
  return (
    <Routes>
      <Route index element={<AdminCategories />} />
      <Route path="categories/add" element={<AdminProductAdd />} />
      <Route path="categories/edit/:id" element={<AdminProductEdit />} />
      <Route path="manage/users" element={<AdminUsers />} />
      <Route path="manage/purchases" element={<AdminPurchases />} />
    </Routes>
  );
}

export default Admin;
