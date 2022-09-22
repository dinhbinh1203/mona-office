import ProductUser from '../Product/ProductUser/ProductUser';
import styles from './ListProducts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ListProducts({ products }) {
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div
            className={cx('col', 'l-3', 'm-4', 'c-6', 'product')}
            key={product.id}
          >
            {!product.new && <ProductUser product={product} id={product.id} />}
          </div>
        ))}
      </div>
    </>
  );
}

export default ListProducts;
