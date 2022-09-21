import styles from './UsersInformation.module.scss';
import classNames from 'classnames/bind';
import usersApi from '../../../api/usersApi';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';

const cx = classNames.bind(styles);

function UsersInformation() {
  const [isLoading, setIsLoading] = useState(false);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await usersApi.getAllUser();
        setIsLoading(true);
        setListUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(listUser);

  return (
    <div className="grid wide">
      {!isLoading ? (
        <Loading />
      ) : (
        <div className={cx('users__information')}>
          {listUser.length === 0 ? (
            <div className={cx('notification')}>Chưa có người dùng đăng ký</div>
          ) : (
            <>
              <div className={cx('use__management--pc')}>
                <div className={cx('row', 'title')}>
                  <div
                    className={cx('col', 'm-1', 'l-1', 'c-1', 'title__content')}
                  >
                    STT
                  </div>
                  <div
                    className={cx('col', 'm-3', 'l-3', 'c-3', 'title__content')}
                  >
                    Tên người dùng
                  </div>
                  <div
                    className={cx('col', 'm-3', 'l-3', 'c-3', 'title__content')}
                  >
                    Email
                  </div>
                  <div
                    className={cx('col', 'm-2', 'l-2', 'c-2', 'title__content')}
                  >
                    Số điện thoại
                  </div>
                  <div
                    className={cx('col', 'm-3', 'l-3', 'c-3', 'title__content')}
                  >
                    Địa chỉ
                  </div>
                </div>
                {listUser.map((user, index) => (
                  <div className={cx('row', 'container__user')} key={user.id}>
                    <div className={cx('col', 'm-1', 'l-1', 'c-1', 'user')}>
                      {index + 1}
                    </div>
                    <div className={cx('col', 'm-3', 'l-3', 'c-3', 'user')}>
                      {user.name}
                    </div>
                    <div className={cx('col', 'm-3', 'l-3', 'c-3', 'user')}>
                      {user.email}
                    </div>
                    <div className={cx('col', 'm-2', 'l-2', 'c-2', 'user')}>
                      {user.phone}
                    </div>
                    <div className={cx('col', 'm-3', 'l-3', 'c-3', 'user')}>
                      {user.address}
                    </div>
                  </div>
                ))}
              </div>
              <div className={cx('use__management--mobile', 'row')}>
                {listUser.map((user, index) => (
                  <div
                    className={cx('col', 'c-12', 'm-6', 'l-4', 'wrapper__user')}
                    key={user.id}
                  >
                    <>
                      <div className={cx('user__stt')}>Số thứ tự: {index}</div>
                      <div className={cx('wrapper__information')}>
                        <div className={cx('user__information', 'row')}>
                          <p className="col c-4 m-4 l-4">Tên người dùng: </p>
                          <p className="col c-8 m-8 l-8">{user.name}</p>
                        </div>
                        <div className={cx('user__information', 'row')}>
                          <p className="col c-4 m-4 l-4">Email: </p>
                          <p className="col c-8 m-8 l-8">{user.email}</p>
                        </div>
                        <div className={cx('user__information', 'row')}>
                          <p className="col c-4 m-4 l-4">Số điện thoại: </p>
                          <p className="col c-8 m-8 l-8">{user.phone}</p>
                        </div>
                        <div className={cx('user__information', 'row')}>
                          <p className="col c-4 m-4 l-4">Địa chỉ: </p>
                          <p className="col c-8 m-8 l-8">{user.address}</p>
                        </div>
                      </div>
                    </>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default UsersInformation;
