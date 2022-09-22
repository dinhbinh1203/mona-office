import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ordersApi from '../../../api/ordersApi';

import Button from '../../../components/Button/Button';
import ProductCart from '../../../components/Product/ProductCart/ProductCart';
import Rules from '../../../components/Rules/Rules';
import Title from '../../../components/Title/Title';

import { selectCurrentUserId } from '../../../store/user/user.selector';
import {
  selectCartItems,
  selectCartTotal,
} from '../../../store/cart/cart.selector';
import { setCartItemStart } from '../../../store/cart/cart.action';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
  const idUser = useSelector(selectCurrentUserId);
  const amount = useSelector(selectCartTotal);
  const [cartItems, setCartItems] = useState([]);
  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const dispatch = useDispatch();
  const cartItemRedux = useSelector(selectCartItems);
  useEffect(() => {
    (async () => {
      try {
        const data = await ordersApi.getOrderById(idUser);
        const listItem = data.cartItems;
        await dispatch(setCartItemStart(listItem));
        await setCartItems(listItem);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="grid wide">
      <Title className="row">Giỏ hàng của bạn</Title>
      <div className={cx('row', 'cart__container')}>
        {cartItemRedux.length ? (
          <>
            <div className={cx('col', 'c-12', 'm-8', 'l-8')}>
              {cartItems.map((item) => (
                <ProductCart key={item.id} cartItem={item} />
              ))}
            </div>
            <div className={cx('col', 'c-12', 'm-4', 'l-4')}>
              <div className={cx('wrapper__order')}>
                <div className={cx('order__title')}>Thông tin đơn hàng</div>
                <div className={cx('order__total')}>
                  <p className={cx('order__total--title')}>Tổng tiền:</p>
                  <p className={cx('order__total--price')}>
                    {`${formatMoney(amount)}`}đ
                  </p>
                </div>
                <div className={cx('order__pay')}>
                  <a href="/account/checkout">
                    <Button primary>Mua hàng</Button>
                  </a>
                </div>
              </div>
              <div className={cx('wrapper__rules')}>
                <Rules />
              </div>
            </div>
          </>
        ) : (
          <div className={cx('shop__wrapper')}>
            <p className={cx('not__product--title')}>
              Chưa có sản phẩm nào trong giỏ hàng.
            </p>
            <a href="/shop">
              <Button primary>Quay trở lại cửa hàng</Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
