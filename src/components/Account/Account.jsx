import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { signOutStart } from '../../store/user/user.action';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Account() {
  const [container, setContainer] = useState(false);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOutStart());
  };

  const handleOpen = () => {
    setContainer(!container);
  };

  return (
    <div className={cx('account')}>
      <div className={cx('account__title')} onClick={handleOpen}>
        <span className={cx('title__icon')}>
          <span className="material-symbols-outlined">person</span>
        </span>
        <span className={cx('title__content')}>Tài khoản</span>
      </div>
      {container && (
        <div className={cx('account__container')}>
          <ul className={cx('container__list')}>
            <a href="/account">
              <li className={cx('item')}>Tài khoản của bạn</li>
            </a>
            <a href="/account-edit">
              <li className={cx('item')}>Cập nhật thông tin</li>
            </a>
            <a href="/buy">
              <li className={cx('item')}>Đơn mua</li>
            </a>
            <li className={cx('item')} onClick={handleSignOut}>
              Đăng xuất
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Account;
