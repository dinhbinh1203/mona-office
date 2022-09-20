import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOutStart } from '../../../store/user/user.action';
import { selectCurrentUser } from '../../../store/user/user.selector';
import images from '../../../assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../Search/Search';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Nav from '../../../components/Nav/Nav';
import { Link } from 'react-router-dom';
import Account from '../../../components/Account/Account';

const cx = classNames.bind(styles);

const categories = [
  {
    id: 0,
    title: 'Tất cả sản phẩm',
    href: '/shop',
  },
  {
    id: 1,
    title: 'Bìa hồ sơ',
    href: '/shop/1',
  },
  {
    title: 'Bút viết',
    id: 2,
    href: '/shop/2',
  },
  {
    title: 'Giấy',
    id: 3,
    href: '/shop/3',
  },
  {
    title: 'Thước',
    id: 4,
    href: '/shop/4',
  },
  {
    title: 'Cặp sách',
    id: 5,
    href: '/shop/5',
  },
  {
    title: 'Sản phẩm khác',
    id: 6,
    href: '/shop/6',
  },
];

function Header() {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const handleClickOpen = () => setClick(true);
  const handleClickClose = () => setClick(false);
  const handleSignOut = () => {
    dispatch(signOutStart());
  };

  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className={cx('header')}>
      <div className={cx('header-inner', 'grid', 'wide')}>
        <div className="row">
          <div className="col c-3 l-3 m-3 ">
            <a href="/" className={cx('logo-header')}>
              <img src={images.logo} alt="logo"></img>
            </a>
          </div>
          <div className="col c-6 l-6 m-6 ">
            <div className={cx('wrapper__search')}>
              <Search />
            </div>
          </div>
          <div className="col c-3 l-3 m-3 ">
            <div className={cx('information')}>
              {currentUser ? (
                <Account />
              ) : (
                <div className={cx('header-access')}>
                  <a href="/login" className={cx('access-content')}>
                    Đăng nhập
                  </a>
                  <span> / </span>
                  <a href="/register" className={cx('access-content')}>
                    Đăng ký
                  </a>
                </div>
              )}
              <Tippy
                delay={[0, 200]}
                content="Xem giỏ hàng của bạn"
                placement="bottom"
              >
                <a href="/cart" className={cx('cart-wrapper')}>
                  <span className={cx('cart-name')}>Giỏ hàng</span>
                  <div className={cx('cart-icon')}>
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                    <div className={cx('cart-number')}>0</div>
                  </div>
                </a>
              </Tippy>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={cx('wrapper__nav')}>
            <Nav categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
