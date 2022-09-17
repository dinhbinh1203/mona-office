import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserId } from '../../../store/user/user.selector';
import userApi from '../../../api/userApi';

import Button from '../../../components/Button/Button';
import styles from './UserInformation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function UserInformation() {
  const idUser = useSelector(selectCurrentUserId);
  const [user, setUser] = useState();

  useEffect(() => {
    if (!idUser) return;
    (async () => {
      try {
        const data = await userApi.getUserById(idUser);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idUser]);

  return (
    <>
      {(!idUser || Boolean(user)) && (
        <div className={cx('user__information', 'grid', 'wide')}>
          <h1 className={cx('title__main', 'row')}>Tài khoản của bạn</h1>
          <div className={cx('user__detail', 'row')}>
            <div className={cx('col', 'c-3', 'l-3', 'm-3')}></div>
            <div className={cx('col', 'c-6', 'l-6', 'm-6')}>
              <p className={cx('title__detail')}>Thông tin tài khoản</p>
              <div className={cx('container')}>
                <div className={cx('item')}>
                  <p className={cx('item__title')}>Tên</p>
                  <p className={cx('item__text')}>{user.name}</p>
                </div>
                <div className={cx('item')}>
                  <p className={cx('item__title')}>Email</p>
                  <p className={cx('item__text')}>{user.email}</p>
                </div>
                <div className={cx('item')}>
                  <p className={cx('item__title')}>Số điện thoại</p>
                  <p className={cx('item__text')}>{user.phone}</p>
                </div>
                <div className={cx('item')}>
                  <p className={cx('item__title')}>Địa chỉ</p>
                  <p className={cx('item__text')}>{user.address}</p>
                </div>
              </div>
              <a href="/information-user-edit" className={cx('btn__update')}>
                <Button primary>Cập nhật thông tin</Button>
              </a>
            </div>
            <div className={cx('col', 'c-3', 'l-3', 'm-3')}></div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserInformation;
