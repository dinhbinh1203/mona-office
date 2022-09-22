import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>
      <div className={cx('container')}>
        <Outlet />
      </div>
      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
