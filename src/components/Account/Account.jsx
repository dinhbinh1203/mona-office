import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';

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

  const currentUser = useSelector(selectCurrentUser);
  let admin = false;
  if (currentUser) {
    if (currentUser.id === 'rPLnyncwgCco86gvRlOCaPM4Vqc2') {
      admin = true;
    }
  }

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
          {admin ? (
            <ul className={cx('container__list')}>
              <a href="/admin">
                <li className={cx('item')}>Danh sách sản phẩm</li>
              </a>
              <a href="/admin/manage/users">
                <li className={cx('item')}>Danh sách người dùng</li>
              </a>
              <a href="/admin/manage/purchases">
                <li className={cx('item')}>Danh sách đơn mua hàng</li>
              </a>
              <li className={cx('item')} onClick={handleSignOut}>
                Đăng xuất
              </li>
            </ul>
          ) : (
            <ul className={cx('container__list')}>
              <a href="/account">
                <li className={cx('item')}>Tài khoản của bạn</li>
              </a>
              <a href="/account/edit">
                <li className={cx('item')}>Cập nhật thông tin</li>
              </a>
              <a href="/account/buy">
                <li className={cx('item')}>Đơn mua</li>
              </a>

              <li className={cx('item')} onClick={handleSignOut}>
                Đăng xuất
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Account;
