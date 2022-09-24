import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import usersApi from '../../api/usersApi';
import purchasesApi from '../../api/purchasesApi';
import styles from './UserPurchases.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

UserPurchases.propTypes = {
  userId: PropTypes.string.isRequired,
};

function UserPurchases({ userId }) {
  const [user, setUser] = useState([]);
  const [listPurchases, setListPurchases] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataUser = await usersApi.getUserById(userId);
        await setUser(dataUser);
        const dataPurchasesUser = await purchasesApi.getPurchasesById(userId);
        await setListPurchases(dataPurchasesUser.cartItems);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userId]);

  return (
    <>
      <div className={cx('row', 'information__purchases', 'pc')}>
        <div className={cx('col', 'c-2', 'm-2', 'l-2', 'content')}>
          {user.name}
        </div>
        <div className={cx('col', 'c-2', 'm-2', 'l-2', 'content')}>
          {user.email}
        </div>
        <div className={cx('col', 'c-2', 'm-2', 'l-2', 'content')}>
          {user.phone}
        </div>
        <div className={cx('col', 'c-2', 'm-2', 'l-2', 'content')}>
          {user.address}
        </div>
        <div className={cx('col', 'c-4', 'm-4', 'l-4', 'purchases')}>
          {listPurchases.map((product) => (
            <div className={cx('wrapper__product', 'row')}>
              <div className={cx('col', 'c-6', 'm-6', 'l-6')}>
                {product.name}
              </div>
              <div className={cx('col', 'c-3', 'm-3', 'l-3', 'text')}>
                {product.price}
              </div>
              <div className={cx('col', 'c-3', 'm-3', 'l-3', 'text')}>
                {product.quantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserPurchases;
