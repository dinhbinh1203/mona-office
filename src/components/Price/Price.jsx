import PropTypes from 'prop-types';
import styles from './Price.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

Price.propTypes = {
  prevPrice: PropTypes.number,
  price: PropTypes.number,
};

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

      <p className={cx('product__price--now')}>{`${formatMoney(price)}`}đ</p>
    </div>
  );
}

export default Price;
