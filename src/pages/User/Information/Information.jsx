import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserId } from '../../../store/user/user.selector';
import usersApi from '../../../api/usersApi';

import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button';
import styles from './Information.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Information() {
  const idUser = useSelector(selectCurrentUserId);
  const [user, setUser] = useState();

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

  const data = [
    {
      title: 'Tên',
      content: `${user?.name}`,
    },
    {
      title: 'Email',
      content: `${user?.email}`,
    },
    {
      title: 'SĐT',
      content: `${user?.phone}`,
    },
    {
      title: 'Địa chỉ',
      content: `${user?.address}`,
    },
  ];

  return (
    <>
      {(!idUser || Boolean(user)) && (
        <div className={cx('user__information', 'grid', 'wide')}>
          <div className="row">
            <Title>Tài khoản của bạn</Title>
          </div>
          <div className={cx('user__detail', 'row')}>
            <div className="col c-1 m-3 l-3"></div>
            <div className="col c-10 m-6 l-6">
              <p className={cx('title__detail')}>Thông tin tài khoản</p>
              <div className={cx('container')}>
                {data.map((item, index) => (
                  <div className={cx('item', 'row')} key={index}>
                    <p
                      className={cx('item__title', 'col', 'c-3', 'm-3', 'l-3')}
                    >
                      {item.title}
                    </p>
                    <p className={cx('item__text', 'col', 'c-9', 'm-9', 'l-9')}>
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
              <a href="/information-user-edit" className={cx('btn__update')}>
                <Button primary>Cập nhật thông tin</Button>
              </a>
            </div>
            <div className="col c-1 m-3 l-3"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Information;
