import PropTypes from 'prop-types';
import ProductUser from '../Product/ProductUser/ProductUser';
import styles from './ListProductHome.module.scss';
import classNames from 'classnames/bind';

ListProductHome.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array.isRequired,
};

const cx = classNames.bind(styles);

function ListProductHome({ title, products }) {
  return (
    <div className={cx('list__product--home')}>
      <div className={cx('list__title')}>
        <div className={cx('title__content')}>{title}</div>
        <a href="/shop">
          <div className={cx('title__watch--all')}>Xem tất cả</div>
        </a>
      </div>
      <div className="row">
        {products.map((product) => (
          <div
            className={cx('col', 'l-2-4', 'm-4', 'c-6', 'product')}
            key={product.id}
          >
            {!product.new && <ProductUser product={product} id={product.id} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProductHome;
