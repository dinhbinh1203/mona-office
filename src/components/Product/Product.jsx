import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function Product({
  image,
  title,
  prevPrice,
  nowPrice,
  className,
  description,
  rent,
  news,
  normal,
}) {
  const classesTitle = cx('product-title', {
    [className]: className,
    rent,
    news,
    normal,
  });

  return (
    <div className={cx('product')}>
      <div className={cx('product-image')}>
        <img alt="product" src={image}></img>
      </div>
      <div className={classesTitle}>{`${title}`}</div>

      <div className={cx('product-price')}>
        {prevPrice && (
          <div className={cx('product-price--prev')}>{`${prevPrice}`},000đ</div>
        )}
        {nowPrice && (
          <div className={cx('product-price--now')}>{`${nowPrice}`},000đ</div>
        )}
      </div>
      {normal && (
        <div className={cx('button')}>
          <Button primary>Thêm vào giỏ</Button>
        </div>
      )}
      {rent && (
        <div className={cx('button')}>
          <Button primary>Liên hệ</Button>
        </div>
      )}

      {description && (
        <div className={cx('product-description')}>
          {`${description[0]}`}...
        </div>
      )}
      {prevPrice && <div className={cx('tag-discount-percent')}>14%</div>}
    </div>
  );
}

export default Product;
