import { Routes, Route } from 'react-router-dom';
import Information from './Information/Information';
import Edit from './Edit/Edit';
import Cart from './Cart/Cart';
import Buy from './Buy/Buy';
import Checkout from './Checkout/Checkout';

function User() {
  return (
    <Routes>
      <Route index element={<Information />} />
      <Route path="edit" element={<Edit />} />
      <Route path="cart" element={<Cart />} />
      <Route path="buy" element={<Buy />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default User;
