import { Routes, Route } from 'react-router-dom';

import AdminProductEdit from './AdminProductEdit/AdminProductEdit';
import AdminCategories from './AdminCategories/AdminCategories';
import AdminProductAdd from './AdminProductAdd/AdminProductAdd';
import UsersInformation from './UsersInformation/UsersInformation';
import ManagePurchases from './ManagePurchases/ManagePurchases';

function Admin() {
  return (
    <Routes>
      <Route index element={<AdminCategories />} />
      <Route path="categories/add" element={<AdminProductAdd />} />
      <Route path="categories/edit/:id" element={<AdminProductEdit />} />
      <Route path="manage/users" element={<UsersInformation />} />
      <Route path="manage/purchases" element={<ManagePurchases />} />
    </Routes>
  );
}

export default Admin;
