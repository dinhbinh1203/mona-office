import { Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import News from './pages/News/News';
import InformationUser from './pages/InformationUser/InformationUser';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import { checkUserSession } from './store/user/user.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute/PrivateRoute';

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
        <Route path="information-user" element={<InformationUser />} />
        <Route path="cart-user" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
