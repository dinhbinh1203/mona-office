import styles from './Price.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Price({ prevPrice, price }) {
  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  return (
    <div className={cx('product__price')}>
      {prevPrice && (
        <p className={cx('product__price--prev')}>
          {`${formatMoney(prevPrice)}`}đ
        </p>
      )}
      {price && (
        <p className={cx('product__price--now')}>{`${formatMoney(price)}`}đ</p>
      )}
    </div>
  );
}

export default Price;
