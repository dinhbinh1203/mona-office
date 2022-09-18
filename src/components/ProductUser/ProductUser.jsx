import styles from './ProductUser.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';

import { handleAddCartItem } from '../../store/cart/cart.action';
import { selectCurrentUserId } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function ProductUser({ product, id }) {
  const idUser = useSelector(selectCurrentUserId);

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const percent = (a, b) => {
    return 100 - Math.floor((a / b) * 100);
  };

  const handleAdd = async () => {
    handleAddCartItem(idUser, product);
  };

  return (
    <div>
      <div className={cx('product')}>
        <div className={cx('product__image')}>
          <img alt="product" src={product.imageUrl}></img>
        </div>
        <div className={cx('product__title')}>{`${product.name}`}</div>

        <div className={cx('product__price')}>
          {product.prevPrice && (
            <div className={cx('product__price--prev')}>
              {`${formatMoney(product.prevPrice)}`}đ
            </div>
          )}
          {product.price && (
            <div className={cx('product__price--now')}>
              {`${formatMoney(product.price)}`}đ
            </div>
          )}
        </div>

        <div className={cx('product__button')}>
          <Button primary onClick={handleAdd}>
            Thêm vào giỏ
          </Button>
        </div>

        {product.prevPrice && (
          <div className={cx('tag__discount--percent')}>
            {`${percent(product.price, product.prevPrice)}`}%
          </div>
        )}

        <a href={`shop/product/${id}`}>Xem chi tiết</a>
      </div>
    </div>
  );
}

export default ProductUser;
