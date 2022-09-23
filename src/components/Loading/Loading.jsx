import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className="grid wide">
      <div className={cx('is__loading')}>
        <div className={cx('loading')}></div>;
      </div>
    </div>
  );
}

export default Loading;
