import { useState } from 'react';
import { signUpStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import SignInGoogle from '../SignInGoogle/SignInGoogle';
import AccessSign from '../AccessSign/AccessSign';

import styles from './FormSignUp.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const initialValue = {
  email: '',
  password: '',
  confirmPassword: '',
};

function FormSigUp() {
  const [formFields, setFormFields] = useState(initialValue);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(initialValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={cx('form__sign-up--wrapper')}>
      <div className={cx('sign__up--title')}>Đăng ký tài khoản</div>
      <div className={cx('sign__up--description')}>
        Tạo một tài khoản để nhận được những ưu đãi tốt nhất từ Mona Office
      </div>
      <div className={cx('sign__up--form')}>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            placeholder="Email"
            type="email"
            required
            onChange={handleChange}
            value={email}
            label="Email"
          />

          <FormInput
            name="password"
            placeholder="Mật khẩu"
            type="password"
            required
            onChange={handleChange}
            value={password}
            label="Mật khẩu"
          />

          <FormInput
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            type="password"
            required
            onChange={handleChange}
            value={confirmPassword}
            label="Xác nhận mật khẩu"
          />

          <AccessSign
            btn="Đăng ký"
            description="Bạn đã có tài khoản?"
            to="/login"
            title="Đăng nhập"
          />
          <SignInGoogle title="Hoặc đăng ký bằng" />
        </form>
      </div>
    </div>
  );
}

export default FormSigUp;
