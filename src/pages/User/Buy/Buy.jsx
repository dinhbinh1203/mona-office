import classNames from 'classnames/bind';
import styles from './Buy.module.scss';

import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import usersApi from '../../../api/usersApi';
import ordersApi from '../../../api/ordersApi';

import { selectCurrentUserId } from '../../../store/user/user.selector';
import { setCartItemStart } from '../../../store/cart/cart.action';
import {
  selectCartTotal,
  selectCartItems,
} from '../../../store/cart/cart.selector';

import Button from '../../../components/Button/Button';
import ProductCheckout from '../../../components/ProductCheckout/ProductCheckout';

import UserForm from '../../../features/UserForm/UserForm';
import { selectUserIsLoading } from '../../../store/user/user.selector';

const cx = classNames.bind(styles);

function Buy() {
  const dispatch = useDispatch();
  const idUser = useSelector(selectCurrentUserId);

  const amount = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    (async () => {
      try {
        const data = await ordersApi.getOrderById(idUser);
        const listItem = data.cartItems;
        dispatch(setCartItemStart(listItem));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  return (
    <div className="grid wide">
      <div className={cx('row', 'cart__container')}>
        {cartItems.length ? (
          <div className="col c-12 l-12 m-12">
            <div className={cx('wrapper')}>
              {cartItems.map((item) => (
                <ProductCheckout key={item.id} cartItem={item} />
              ))}
              <div className={cx('price__total')}>
                <p className={cx('price__total--title')}>Tổng cộng</p>
                <p className={cx('price__total--number')}>
                  {`${formatMoney(amount)}`}đ
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx('shop-wrapper')}>
            <p className={cx('not-product-title')}>
              Bạn chưa đặt mua sản phẩm.
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

export default Buy;
