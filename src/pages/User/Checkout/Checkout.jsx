import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

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
import Loading from '../../../components/Loading/Loading';

import UserForm from '../../../features/UserForm/UserForm';
import { selectUserIsLoading } from '../../../store/user/user.selector';
import purchasesApi from '../../../api/purchasesApi';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Checkout() {
  const dispatch = useDispatch();
  const idUser = useSelector(selectCurrentUserId);

  const amount = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const [listCart, setListCart] = useState([]);

  useEffect(() => {
    if (!idUser) return;
    (async () => {
      try {
        const data = await usersApi.getUserById(idUser);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idUser]);

  useEffect(() => {
    (async () => {
      try {
        const data = await ordersApi.getOrderById(idUser);
        const listItem = data.cartItems;
        await setListCart(listItem);
        await dispatch(setCartItemStart(listItem));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const initialValues = {
    id: user?.id,
    name: user?.name,
    phone: user?.phone,
    address: user?.address,
  };

  const handleBuy = async () => {
    console.log('buy');
    await purchasesApi.update({
      id: idUser,
      cartItems: cartItems,
    });
    await ordersApi.update({
      id: idUser,
      cartItems: [],
    });
  };

  const handleProductFormSubmit = async (formValues) => {
    await usersApi.update(formValues);
    await handleBuy();
    toast.success('Mua hàng thành công');
    navigate('/');
  };

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  return (
    <div className="grid wide">
      <div className={cx('row', 'cart__container')}>
        {(!idUser || Boolean(user)) && (
          <>
            {cartItems.length !== 0 ? (
              <>
                <div className="col c-6 l-6 m-6">
                  <div className={cx('wrapper')}>
                    <p className={cx('title')}>Thông tin giao hàng</p>
                    <div className={cx('user__email')}>
                      <div className={cx('user__icon')}>
                        <span className="material-symbols-outlined">
                          person
                        </span>
                      </div>
                      <div className={cx('email')}>{user?.email}</div>
                    </div>
                    <UserForm
                      initialValues={initialValues}
                      onSubmit={handleProductFormSubmit}
                      nameSubmit="Hoàn tất đơn hàng"
                    />
                  </div>
                </div>
                <div className="col c-6 l-6 m-6">
                  <div className={cx('wrapper')}>
                    <p className={cx('title')}>Thông tin sản phẩm</p>
                    {listCart.map((item) => (
                      <ProductCheckout key={item.id} cartItem={item} />
                    ))}
                    <div className={cx('wrapper__price')}>
                      <div className={cx('price')}>
                        <p>Tổng tiền:</p>
                        <p>{`${formatMoney(amount)}`}đ</p>
                      </div>
                      <div className={cx('price')}>
                        <p>Phí vận chuyển:</p>
                        <p>0đ</p>
                      </div>
                    </div>
                    <div className={cx('price__total')}>
                      <p className={cx('price__total--title')}>Tổng cộng</p>
                      <p className={cx('price__total--number')}>
                        {`${formatMoney(amount)}`}đ
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className={cx('shop-wrapper')}>
                <p className={cx('not-product-title')}>
                  Chưa có sản phẩm nào trong giỏ hàng.
                </p>
                <a href="/shop">
                  <Button primary>Quay trở lại cửa hàng</Button>
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
