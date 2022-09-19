import styles from './ProductUser.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';

import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../../store/cart/cart.action';

import { selectCartItems } from '../../store/cart/cart.selector';
const cx = classNames.bind(styles);

function ProductUser({ product, id }) {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const percent = (a, b) => {
    return 100 - Math.floor((a / b) * 100);
  };
  const dispatch = useDispatch();

  const addItemHandler = () => {
    if (!currentUser) {
      navigate('/login');
    } else {
      dispatch(addItemToCart(currentUser.id, cartItems, product));
    }
  };

  return (
    <div>
      <div className={cx('product')}>
        <a className={cx('product__description')} href={`shop/product/${id}`}>
          <div className={cx('product__image')}>
            <img alt="product" src={product.imageUrl}></img>
          </div>
          <div className={cx('product__title')}>{`${product.name}`}</div>

          <div className={cx('product__price')}>
            {product.prevPrice && (
              <p className={cx('product__price--prev')}>
                {`${formatMoney(product.prevPrice)}`}đ
              </p>
            )}
            {product.price && (
              <p className={cx('product__price--now')}>
                {`${formatMoney(product.price)}`}đ
              </p>
            )}
          </div>
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
    </div>
  );
}

export default ProductUser;
{
  /* <a href={`shop/product/${id}`}>Xem chi tiết</a> */
}
