import purchasesApi from '../../../api/purchasesApi';
import { useEffect, useState } from 'react';
import styles from './ManagePurchases.module.scss';
import classNames from 'classnames/bind';
import UserPurchases from '../../../components/UserPurchases/UserPurchases';
import Title from '../../../components/Title/Title';

const cx = classNames.bind(styles);

function ManagePurchases() {
  const [listPurchases, setListPurchases] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataPurchases = await purchasesApi.getAll();

        setListPurchases(dataPurchases);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log('listPurchases', listPurchases);

  return (
    <div className="grid wide">
      <div className={cx('container')}>
        <Title>Danh sách đơn mua hàng</Title>
        <div className={cx('row', 'title')}>
          <div className={cx('col', 'c-1', 'm-1', 'l-1', 'title__content')}>
            STT
          </div>
          <div className={cx('col', 'c-1', 'm-1', 'l-1', 'title__content')}>
            Tên
          </div>
          <div className={cx('col', 'c-2', 'm-2', 'l-2', 'title__content')}>
            Email
          </div>
          <div className={cx('col', 'c-2', 'm-2', 'l-2', 'title__content')}>
            SĐT
          </div>
          <div className={cx('col', 'c-2', 'm-2', 'l-2', 'title__content')}>
            Địa chỉ
          </div>
          <div className={cx('col', 'c-4', 'm-4', 'l-4', 'title__content')}>
            <div className="row">
              <div className={cx('col', 'c-12', 'm-12', 'l-12')}>
                Danh sách sản phẩm
              </div>
              <div className={cx('col', 'c-6', 'm-6', 'l-6')}>Sản phẩm</div>
              <div className={cx('col', 'c-3', 'm-3', 'l-3')}>Đơn giá</div>
              <div className={cx('col', 'c-3', 'm-3', 'l-3')}>Số lượng</div>
            </div>
          </div>
        </div>
        {listPurchases.length ? (
          listPurchases.map((user, index) => (
            <>
              <UserPurchases userId={user.id} key={user.id} index={index} />
            </>
          ))
        ) : (
          <div>
            <p>Chưa có đơn hàng nào </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagePurchases;
