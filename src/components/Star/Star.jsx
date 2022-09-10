import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Star.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export function StarOne() {
  return (
    <div className={cx('rate')}>
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
    </div>
  );
}

export function StarTwo() {
  return (
    <div className={cx('rate')}>
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
    </div>
  );
}

export function StarThree() {
  return (
    <div className={cx('rate')}>
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
    </div>
  );
}

export function StarFour() {
  return (
    <div className={cx('rate')}>
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
    </div>
  );
}

export function StarFive() {
  return (
    <div className={cx('rate')}>
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
      <FontAwesomeIcon icon={faStar} className={cx('rate__icon')} />
    </div>
  );
}
