import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  comment: PropTypes.bool,
};

function FormInput({ label, comment, type, ...otherProps }) {
  return (
    <>
      {label && <div className={cx('label__input')}>{`${label}`}</div>}
      {comment ? (
        <textarea
          {...otherProps}
          className={cx('sign__in--input', 'comment')}
        />
      ) : (
        <input {...otherProps} className={cx('sign__in--input')} type={type} />
      )}
    </>
  );
}

export default FormInput;
