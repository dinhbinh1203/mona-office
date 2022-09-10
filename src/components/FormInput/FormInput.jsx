import styles from './FormInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FormInput = ({ label, comment = false, ...otherProps }) => {
  return (
    <>
      {label && <div className={cx('label__input')}>{`${label}`}</div>}
      {comment ? (
        <textarea
          {...otherProps}
          className={cx('sign__in--input', 'comment')}
        />
      ) : (
        <input {...otherProps} className={cx('sign__in--input')} />
      )}
    </>
  );
};

export default FormInput;
