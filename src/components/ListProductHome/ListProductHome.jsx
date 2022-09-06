import styles from './ListProductHome.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ListProductHome({ title }) {
  return (
    <div className={cx('list-product-home')}>
      <div className={cx('title')}>
        <div className={cx('title-content')}>{title}</div>
        <div className={cx('title-watch-all')}>Xem tất cả</div>
      </div>
      <div className="row">
        <div className="col c-2-4 m-2-4 l-2-4"></div>
      </div>
    </div>
  );
}

export default ListProductHome;
