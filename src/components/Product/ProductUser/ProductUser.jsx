import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../../components/Button/Button';
import Price from '../../../components/Price/Price';
import { selectCurrentUser } from '../../../store/user/user.selector';
import { addItemToCart } from '../../../store/cart/cart.action';
import ordersApi from '../../../api/ordersApi';

import styles from './ProductUser.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

ProductUser.propTypes = {
  product: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

function ProductUser({ product, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const addItemHandler = async () => {
    if (!currentUser) {
      navigate('/login');
    } else {
      const orderUser = await ordersApi.getOrderById(currentUser.id);
      const listCartItem = await orderUser.cartItems;
      await dispatch(addItemToCart(currentUser.id, listCartItem, product));
      toast.success('Thêm sản phẩm thành công');
    }
  };

  const percent = (a, b) => {
    return 100 - Math.floor((a / b) * 100);
  };

  return (
    <div className={cx('product')}>
      <a className={cx('product__description')} href={`/shop/product/${id}`}>
        <div className={cx('product__image')}>
          <img alt="product" src={product.imageUrl}></img>
        </div>
        <div className={cx('product__title')}>{`${product.name}`}</div>
        <Price prevPrice={product.prevPrice} price={product.price} />
      </a>

      <div className={cx('product__button')}>
        <Button primary onClick={addItemHandler}>
          Thêm vào giỏ
        </Button>
      </div>

      {product.prevPrice && (
        <div className={cx('tag__discount--percent')}>
          {`${percent(product.price, product.prevPrice)}`}%
        </div>
      )}
    </div>
  );
}

export default ProductUser;
