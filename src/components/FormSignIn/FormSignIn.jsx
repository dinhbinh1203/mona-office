import React from 'react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart } from '../../store/user/user.action';

import FormInput from '../FormInput/FormInput';
import SignInGoogle from '../SignInGoogle/SignInGoogle';

import styles from './FormSignIn.module.scss';
import classNames from 'classnames/bind';
import AccessSign from '../AccessSign/AccessSign';

const cx = classNames.bind(styles);

const initialValue = {
  email: '',
  password: '',
};

function FormSignIn() {
  const [formFields, setFormFields] = useState(initialValue);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(initialValue);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <div className={cx('form-sign-in-wrapper')}>
      <div className={cx('sign-in-title')}>Chào mừng trở lại</div>
      <div className={cx('sign-in-form')}>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            placeholder="Email"
            type="email"
            required
            onChange={handleChange}
            value={email}
            className={cx('sign-in-input')}
            label="Email"
          />
          <FormInput
            name="password"
            placeholder="Mật khẩu"
            type="password"
            required
            onChange={handleChange}
            value={password}
            className={cx('sign-in-input')}
            label="Mật khẩu"
          />

          <AccessSign
            btn="Đăng nhập"
            description="Bạn chưa có tài khoản?"
            to="/register"
            title="Đăng ký"
          />
        </form>
      </div>

      <SignInGoogle title="Hoặc đăng nhập bằng phương thức khác" />
    </div>
  );
}

export default FormSignIn;
