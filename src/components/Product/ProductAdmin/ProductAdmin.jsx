import PropTypes from 'prop-types';
import styles from './ProductAdmin.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

ProductAdmin.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductAdmin({ product }) {
  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const stringToArray = (string) => {
    const myArray = string.split('\n');
    return myArray;
  };

  return (
    <>
      <div className={cx('product__admin', 'row')}>
        <div className={cx('product__image', 'col', 'c-12', 'l-4', 'm-4')}>
          <img alt="product" src={product.imageUrl}></img>
        </div>
        <div className={cx('product__content', 'col', 'c-12', 'l-8', 'm-8')}>
          <div className={cx('product__content--item')}>
            <div className={cx('item__title')}>Tên sản phẩm:</div>
            <div className={cx('item__text')}>{product.name}</div>
          </div>
          <div className={cx('product__content--item', 'item__column')}>
            <div className={cx('item__title')}>Link ảnh:</div>
            <div className={cx('item__text')}>
              <div className={cx('item__text--item')}>{product.imageUrl}</div>
            </div>
          </div>
          {product.prevPrice && (
            <div className={cx('product__content--item')}>
              <div className={cx('item__title')}>Giá trước đây:</div>
              <div className={cx('item__text')}>
                {`${formatMoney(product.prevPrice)}`}đ
              </div>
            </div>
          )}
          {product.price && (
            <div className={cx('product__content--item')}>
              <div className={cx('item__title')}>Giá bán:</div>
              <div className={cx('item__text')}>
                {`${formatMoney(product.price)}`}đ
              </div>
            </div>
          )}

          <div className={cx('product__content--item', 'item__column')}>
            <div className={cx('item__title')}>Mô tả sản phẩm</div>
            <div className={cx('item__text')}>
              {stringToArray(product.description).map((item) => (
                <div className={cx('item__text--item')}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductAdmin;
