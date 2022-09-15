import styles from './ProductUser.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function ProductUser({ product }) {
  // const classesTitle = cx('product__title', {
  //   [className]: className,
  // });

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const percent = (a, b) => {
    return 100 - Math.floor((a / b) * 100);
  };

  return (
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
      {product.normal && (
        <div className={cx('product__button')}>
          <Button primary>Thêm vào giỏ</Button>
        </div>
      )}
      {product.rent && (
        <div className={cx('product__button')}>
          <Button primary>Liên hệ</Button>
        </div>
      )}

      {product.description && (
        <div className={cx('product__description')}>
          {`${product.description[0]}`}...
        </div>
      )}
      {product.prevPrice && (
        <div className={cx('tag__discount--percent')}>
          {`${percent(product.price, product.prevPrice)}`}%
        </div>
      )}
    </div>
  );
}

export default ProductUser;
