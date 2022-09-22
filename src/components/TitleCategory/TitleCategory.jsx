import styles from './TitleCategory.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TitleCategory({ children }) {
  return <div className={cx('title')}>{children}</div>;
}

export default TitleCategory;
