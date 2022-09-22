import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import Shop from './pages/Shop/Shop';
import Admin from './pages/Admin/Admin';
import News from './pages/News/News';

import PrivateRoute from './utils/PrivateRoute/PrivateRoute';
import AdminRoute from './utils/AdminRoute/AdminRoute';
import UserRoute from './utils/UserRoute/AdminRoute';

import { checkUserSession } from './store/user/user.action';
import User from './pages/User/User';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
        <Route element={<UserRoute />}>
          <Route path="account/*" element={<User />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="admin/*" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
