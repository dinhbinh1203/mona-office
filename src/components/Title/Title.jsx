import PropTypes from 'prop-types';
import styles from './Title.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

function Title({ children }) {
  return <h1 className={cx('title')}>{children}</h1>;
}

export default Title;
