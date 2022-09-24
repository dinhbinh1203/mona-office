import PropTypes from 'prop-types';
import styles from './Rate.module.scss';
import classNames from 'classnames/bind';
import FormRate from '../FormRate/FormRate';

const cx = classNames.bind(styles);

Rate.propTypes = {
  name: PropTypes.string.isRequired,
};

function Rate({ name }) {
  return (
    <div className={cx('rate')}>
      <div className={cx('title')}>
        <h3 className={cx('title__main')}>Đánh giá</h3>
        <p className={cx('title__number')}>Chưa có đánh giá nào</p>
      </div>
      <div className={cx('review__form')}>
        <FormRate name={name} />
      </div>
    </div>
  );
}

export default Rate;
