import React from 'react';
import FormSignIn from '../../components/FormSignIn/FormSignIn.jsx';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className="grid wide">
      <div className={cx('login')}>
        <FormSignIn />
      </div>
    </div>
  );
}

export default Login;
