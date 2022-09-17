import { Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import News from './pages/News/News';

import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import Admin from './pages/Admin/Admin';
import { checkUserSession } from './store/user/user.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute/PrivateRoute';
import { fetchCategoriesStart } from './store/categories/categories.action';
import AdminRoute from './utils/PrivateRoute copy/AdminRoute';
import UserInformation from './pages/User/UserInformation/UserInformation';
import UserInformationEdit from './pages/User/UserInformationEdit/UserInformationEdit';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="shop/*" element={<Shop />} />
        <Route index element={<Home />} />
        <Route path="news/*" element={<News />} />
        <Route element={<PrivateRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="information-user" element={<UserInformation />} />
        <Route path="information-user-edit" element={<UserInformationEdit />} />
        <Route path="cart-user" element={<Cart />} />
        <Route element={<AdminRoute />}>
          <Route path="admin/categories/*" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
