import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectCurrentUser } from '../../../store/user/user.selector';
import { setCartItemStart } from '../../../store/cart/cart.action';
import ordersApi from '../../../api/ordersApi';
import Price from '../../Price/Price';

import styles from './ProductCheckout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

ProductCheckout.propTypes = {
  cartItem: PropTypes.node.isRequired,
};

function ProductCheckout({ cartItem }) {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await ordersApi.getOrderById(user.id);
        const cartItems = data.cartItems;
        dispatch(setCartItemStart(cartItems));
        console.log('cartItems', cartItems);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={cx('product__card', 'row')}>
      <div className={cx('col', 'l-3', 'm-3', 'c-3', 'product__image')}>
        <img src={cartItem.imageUrl} alt="product-cart"></img>
      </div>
      <div className={cx('col', 'l-9', 'm-9', 'c-9', 'product__information')}>
        <div className={cx('wrapper__name')}>
          <h3 className={cx('product__name')}>{cartItem.name}</h3>
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

        <div className={cx('wrapper__total')}>
          <div className={cx('product__total')}>
            Số lượng: {cartItem.quantity}
          </div>
          <div className={cx('product__total')}>
            {`${formatMoney(cartItem.price * cartItem.quantity)}`}đ
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCheckout;
