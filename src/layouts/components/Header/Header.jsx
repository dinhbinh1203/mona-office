import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectCurrentUser,
  selectCurrentUserId,
} from '../../../store/user/user.selector';
import images from '../../../assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../Search/Search';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Nav from '../../../components/Nav/Nav';
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
  {
    title: 'Tin mới nhất',
    id: 7,
    href: '/shop/6',
  },
];

function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className={cx('header')}>
      <div className={cx('header__inner', 'grid', 'wide')}>
        <div className={cx('row', 'choose')}>
          <div
            className={cx('col', 'c-2', 'm-0', 'l-0', 'icon__bar')}
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="col c-6 l-3 m-3 ">
            <a href="/" className={cx('logo__header')}>
              <img src={images.logo} alt="logo"></img>
            </a>
          </div>
          <div className="col c-0 l-6 m-6 ">
            <div className={cx('wrapper__search')}>
              <Search />
            </div>
          </div>
          <div className="col c-4 l-3 m-3 ">
            <div className={cx('information')}>
              {currentUser ? (
                <Account />
              ) : (
                <div className={cx('header__access')}>
                  <a href="/login" className={cx('access__content')}>
                    Đăng nhập
                  </a>
                  <span> / </span>
                  <a href="/register" className={cx('access__content')}>
                    Đăng ký
                  </a>
                </div>
              )}
              <Tippy
                delay={[0, 200]}
                content="Xem giỏ hàng của bạn"
                placement="bottom"
              >
                <a href="/account/cart" className={cx('cart__wrapper')}>
                  <span className={cx('cart__name')}>Giỏ hàng</span>
                  <div className={cx('cart__icon')}>
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                  </div>
                </a>
              </Tippy>
            </div>
          </div>
        </div>
        <div className={cx('row', 'pc')}>
          <div className={cx('wrapper__nav')}>
            <Nav categories={categories} />
          </div>
        </div>
        <div
          className={cx(
            'row',
            'mobile',
            show ? 'show__mobile' : 'close__mobile',
          )}
        >
          <div className={cx('wrapper__nav')}>
            <Nav categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
