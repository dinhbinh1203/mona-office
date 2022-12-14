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

import { fetchCategoriesStart } from './store/categories/categories.action';
import { checkUserSession } from './store/user/user.action';
import User from './pages/User/User';
import Page404 from './pages/Page404/Page404';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoriesStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/shop/*" element={<Shop />} />
        <Route path="" index element={<Home />} />
        <Route path="/news/*" element={<News />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<UserRoute />}>
          <Route path="/account/*" element={<User />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
