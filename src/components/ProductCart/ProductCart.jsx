import styles from './ProductCart.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import { selectCurrentUserId } from '../../store/user/user.selector';
import {
  handleAddCartItem,
  handleRemoveCartItem,
  handleClearCartItem,
} from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductCart({ cartItem }) {
  const idUser = useSelector(selectCurrentUserId);

  const handleAdd = async () => {
    handleAddCartItem(idUser, cartItem);
    setQuantity(quantity + 1);
  };

  const handleRemove = async () => {
    handleRemoveCartItem(idUser, cartItem);
    setQuantity(quantity - 1);
  };

  const handleClear = async () => {
    handleClearCartItem(idUser, cartItem);
  };

  const [quantity, setQuantity] = useState(cartItem.quantity);

  return (
    <div className={cx('product__cart')}>
      {/* <img src={cartItem.imageUrl} alt="product-cart"></img> */}
      <div>Tên sản phẩm: {cartItem.name}</div>
      <div>Gía {cartItem.price}</div>
      <div>Số lượng {quantity}</div>
      <div>
        <Button onClick={handleAdd}>add</Button>
      </div>
      <div>
        <Button onClick={handleRemove}>remove</Button>
      </div>
      <div>
        <Button onClick={handleClear}>xóa tất cả</Button>
      </div>
    </div>
  );
}

export default ProductCart;
