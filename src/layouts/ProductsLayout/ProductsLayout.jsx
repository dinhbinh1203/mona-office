import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import styles from './ProductsLayOut.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProductsLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default ProductsLayout;
