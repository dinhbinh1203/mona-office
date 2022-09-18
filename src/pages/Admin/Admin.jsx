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
      <Route path="add" element={<AdminProductAdd />} />
      <Route path="edit/:id" element={<AdminProductEdit />} />
      <Route path="users" element={<AdminUsers />} />
      <Route path="purchases" element={<AdminPurchases />} />
    </Routes>
  );
}

export default Admin;
