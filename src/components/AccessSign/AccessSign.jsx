import PropTypes from 'prop-types';
import styles from './AccessSign.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

AccessSign.propTypes = {
  btn: PropTypes.string,
  description: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
};

function AccessSign({ btn, description, to, title }) {
  return (
    <div className={cx('sign__btn')}>
      <Button primary type="submit">
        {`${btn}`}
      </Button>
      <div className={cx('sign__redirect')}>
        <div>{`${description}`} </div>
        <Link to={`${to}`}>{`${title}`}</Link>
      </div>
    </div>
  );
}

export default AccessSign;
