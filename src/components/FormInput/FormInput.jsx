import styles from './FormInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      {label && <div className={cx('label-input')}>{`${label}`}</div>}
      <input {...otherProps} className={cx('sign-in-input')} />
    </>
  );
};

export default FormInput;
