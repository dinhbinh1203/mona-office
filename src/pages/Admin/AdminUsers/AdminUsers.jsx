import styles from './AdminUsers.module.scss';
import classNames from 'classnames/bind';
import usersApi from '../../../api/usersApi';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';

const cx = classNames.bind(styles);

function AdminUsers() {
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
    <div>
      {!isLoading ? (
        <Loading />
      ) : (
        <div>
          {listUser.length === 0 && <div>Ko có user</div>}
          {listUser.map((user) => (
            <div key={user.id} className={cx('user')}>
              <div className={cx('user__item')}>{user.name}</div>
              <div className={cx('user__item')}>{user.email}</div>
              <div className={cx('user__item')}>{user.phone}</div>
              <div className={cx('user__item')}>{user.address}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminUsers;
