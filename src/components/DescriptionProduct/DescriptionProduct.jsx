import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DescriptionProduct.module.scss';

const cx = classNames.bind(styles);

DescriptionProduct.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
};

function DescriptionProduct({ name, list }) {
  return (
    <div className={cx('description__product')}>
      <div className={cx('product__name')}>{name}</div>
      <div className={cx('product__description--list')}>
        {list.map((item, index) => (
          <p className={cx('product__description--item')} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DescriptionProduct;
