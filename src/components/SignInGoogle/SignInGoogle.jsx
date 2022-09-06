import images from '../../assets/images';
import styles from './SignInGoogle.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { googleSignInStart } from '../../store/user/user.action';

const cx = classNames.bind(styles);

function SignInGoogle({ title }) {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  return (
    <div className={cx('other-method')}>
      <div>{`${title}`}</div>
      <div onClick={signInWithGoogle}>
        <img
          src={images.logoGoogle}
          alt="google"
          className={cx('logo-google')}
        ></img>
      </div>
    </div>
  );
}

export default SignInGoogle;
