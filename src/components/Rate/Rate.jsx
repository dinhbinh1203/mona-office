import styles from './Rate.module.scss';
import classNames from 'classnames/bind';
import FormRate from '../FormRate/FormRate';

const cx = classNames.bind(styles);

function Rate() {
  return (
    <div className={cx('rate')}>
      <div className={cx('title')}>
        <h3 className={cx('title__main')}>Đánh giá</h3>
        <p className={cx('title__number')}>Chưa có đánh giá nào</p>
      </div>
      <div className={cx('review__form')}>
        <div className={cx('review__form--inner')}>
          <div className={cx('new__respond')}>
            <FormRate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
