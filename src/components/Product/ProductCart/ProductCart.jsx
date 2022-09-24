import PropTypes from 'prop-types';
import { selectCurrentUser } from '../../../store/user/user.selector';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
  setCartItemStart,
} from '../../../store/cart/cart.action';

import { selectCartItems } from '../../../store/cart/cart.selector';
import ordersApi from '../../../api/ordersApi';
import styles from './ProductCart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

ProductCart.propTypes = {
  cartItem: PropTypes.node.isRequired,
};

function ProductCart({ cartItem }) {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const [product, setProduct] = useState(true);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [total, setTotal] = useState(cartItem.price * cartItem.quantity);

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await ordersApi.getOrderById(user.id);
        const cartItems = data.cartItems;
        dispatch(setCartItemStart(cartItems));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const addItemHandler = async () => {
    await dispatch(addItemToCart(user.id, cartItems, cartItem));
    setQuantity(quantity + 1);
    setTotal(total + cartItem.price);
  };

  const removeItemHandler = async () => {
    await dispatch(removeItemFromCart(user.id, cartItems, cartItem));
    if (quantity === 1) {
      setProduct(false);
    }
    setQuantity(quantity - 1);
    setTotal(total - cartItem.price);
  };

  const clearItemHandler = async () => {
    await dispatch(clearItemFromCart(user.id, cartItems, cartItem));
    setProduct(false);
  };

  return (
    <>
      {product && (
        <div className={cx('product__card', 'row')}>
          <div className={cx('col', 'l-3', 'm-3', 'c-3', 'product__image')}>
            <img src={cartItem.imageUrl} alt="product-cart"></img>
          </div>
          <div
            className={cx('col', 'l-9', 'm-9', 'c-9', 'product__information')}
          >
            <div className={cx('wrapper__name')}>
              <h3 className={cx('product__name')}>{cartItem.name}</h3>
              <p className={cx('product__delete')} onClick={clearItemHandler}>
                <span className="material-symbols-outlined">close</span>
              </p>
            </div>
            <div className={cx('product__price')}>
              {cartItem.prevPrice && (
                <p className={cx('price__prev')}>
                  {`${formatMoney(cartItem.prevPrice)}`}đ
                </p>
              )}
              <p className={cx('price__now')}>
                {`${formatMoney(cartItem.price)}`}đ
              </p>
            </div>
            <div className={cx('wrapper__quantity')}>
              <div className={cx('product__quantity')}>
                <button
                  className={cx('product__btn')}
                  onClick={removeItemHandler}
                >
                  -
                </button>
                <div className={cx('quantity__number')}>{quantity}</div>
                <button className={cx('product__btn')} onClick={addItemHandler}>
                  +
                </button>
              </div>
              <div className={cx('product__total')}>
                {`${formatMoney(total)}`}đ
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCart;
