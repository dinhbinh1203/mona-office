import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Loading() {
  return <div className={cx('loading')}></div>;
}

export default Loading;
