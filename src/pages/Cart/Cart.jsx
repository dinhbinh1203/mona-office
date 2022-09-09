import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className="grid wide">
      <div className={cx('shop-wrapper')}>
        <p className={cx('not-product-title')}>
          Chưa có sản phẩm nào trong giỏ hàng.
        </p>
        <Link to="/shop">
          <Button primary>Quay trở lại cửa hàng</Button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
