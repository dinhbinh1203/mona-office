import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Loading from '../../components/Loading/Loading';
import { toast } from 'react-toastify';
import ProductCart from '../../components/ProductCart/ProductCart';
import { selectCurrentUserId } from '../../store/user/user.selector';
import ordersApi from '../../api/ordersApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import purchasesApi from '../../api/purchasesApi';

const cx = classNames.bind(styles);

function Cart() {
  const idUser = useSelector(selectCurrentUserId);
  const [listCartItem, setListCartItem] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await ordersApi.getOrderById(idUser);
        const listItem = data.cartItems;
        setListCartItem(listItem);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleBuy = async () => {
    console.log('buy');
    await purchasesApi.update({
      id: idUser,
      cartItems: listCartItem,
    });
    await ordersApi.update({
      id: idUser,
      cartItems: [],
    });
    toast.success('Bạn đã mua hàng thành công');
    setListCartItem([]);
  };

  return (
    <div className="grid wide">
      <div>
        {listCartItem.length ? (
          listCartItem.map((item) => (
            <ProductCart key={item.id} cartItem={item} />
          ))
        ) : (
          <div className={cx('shop-wrapper')}>
            <p className={cx('not-product-title')}>
              Chưa có sản phẩm nào trong giỏ hàng.
            </p>
            <Link to="/shop">
              <Button primary>Quay trở lại cửa hàng</Button>
            </Link>
          </div>
        )}
      </div>
      <Button primary onClick={handleBuy}>
        Mua hàng
      </Button>
    </div>
  );
}

export default Cart;
