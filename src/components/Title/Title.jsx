import styles from './Title.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Title({ children }) {
  return <h1 className={cx('title')}>{children}</h1>;
}

export default Title;
