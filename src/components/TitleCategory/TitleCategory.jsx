import PropTypes from 'prop-types';
import styles from './TitleCategory.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

TitleCategory.propTypes = {
  children: PropTypes.string.isRequired,
};

function TitleCategory({ children }) {
  return <div className={cx('title')}>{children}</div>;
}

export default TitleCategory;
