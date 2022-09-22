import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import purchasesApi from '../../../api/purchasesApi';
import Button from '../../../components/Button/Button';
import Title from '../../../components/Title/Title';

import { selectCurrentUserId } from '../../../store/user/user.selector';
import { selectCartTotal } from '../../../store/cart/cart.selector';
import { setCartItemStart } from '../../../store/cart/cart.action';

import classNames from 'classnames/bind';
import styles from './Buy.module.scss';
import ProductBuy from '../../../components/Product/ProductBuy/ProductBuy';

const cx = classNames.bind(styles);

function Buy() {
  const idUser = useSelector(selectCurrentUserId);
  const amount = useSelector(selectCartTotal);
  const [cartItems, setCartItems] = useState([]);
  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const data = await purchasesApi.getPurchasesById(idUser);
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
      <Title className="row">Đơn hàng của bạn</Title>
      <div className={cx('row', 'cart__container')}>
        {cartItems.length ? (
          <>
            <div className={cx('col', 'c-0', 'm-2', 'l-2')}></div>
            <div className={cx('col', 'c-12', 'm-8', 'l-8')}>
              {cartItems.map((item) => (
                <ProductBuy key={item.id} cartItem={item} />
              ))}
              <div className={cx('price__total')}>
                <p className={cx('price__total--title')}>Tổng tiền</p>
                <p className={cx('price__total--number')}>
                  {`${formatMoney(amount)}`}đ
                </p>
              </div>
            </div>
            <div className={cx('col', 'c-0', 'm-2', 'l-2')}></div>
          </>
        ) : (
          <div className={cx('not__product')}>
            <p className={cx('not__product--title')}>
              Bạn chưa có đơn hàng nào
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
