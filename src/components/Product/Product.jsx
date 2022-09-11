import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function Product({
  image,
  title,
  prevPrice,
  price,
  className,
  description,
  rent = false,
  news = false,
  normal = false,
}) {
  const classesTitle = cx('product__title', {
    [className]: className,
  });

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const percent = (a, b) => {
    return 100 - Math.floor((a / b) * 100);
  };

  return (
    <div className={cx('product')}>
      <div className={cx('product__image')}>
        <img alt="product" src={image}></img>
      </div>
      <div className={classesTitle}>{`${title}`}</div>

      <div className={cx('product__price')}>
        {prevPrice && (
          <div className={cx('product__price--prev')}>
            {`${formatMoney(prevPrice)}`}đ
          </div>
        )}
        {price && (
          <div className={cx('product__price--now')}>
            {`${formatMoney(price)}`}đ
          </div>
        )}
      </div>
      {normal && (
        <div className={cx('product__button')}>
          <Button primary>Thêm vào giỏ</Button>
        </div>
      )}
      {rent && (
        <div className={cx('product__button')}>
          <Button primary>Liên hệ</Button>
        </div>
      )}

      {description && (
        <div className={cx('product__description')}>
          {`${description[0]}`}...
        </div>
      )}
      {prevPrice && (
        <div className={cx('tag__discount--percent')}>
          {`${percent(price, prevPrice)}`}%
        </div>
      )}
    </div>
  );
}

export default Product;
