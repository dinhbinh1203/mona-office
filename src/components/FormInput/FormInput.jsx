import styles from './FormInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FormInput = ({ label, comment = false, type, ...otherProps }) => {
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
};

export default FormInput;
