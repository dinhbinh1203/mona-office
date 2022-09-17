import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
