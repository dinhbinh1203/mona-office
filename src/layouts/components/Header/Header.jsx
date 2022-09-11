import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOutStart } from '../../../store/user/user.action';
import { selectCurrentUser } from '../../../store/user/user.selector';
import images from '../../../assets/images';
import ListNavMobile from '../../../components/ListNavMobile/ListNavMobile';
import ListNavPc from '../../../components/ListNavPc/ListNavPc';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import {
  selectCategoriesIsLoading,
  selectCategories,
} from '../../../store/categories/categories.selector';

const cx = classNames.bind(styles);

const NAVIGATION = [
  { name: 'Tất cả sản phẩm', href: '/shop' },
  { name: 'Bìa hồ sơ' },
  { name: 'Bút viết' },
  { name: 'Giấy' },
  { name: 'Thước' },
  { name: 'Cặp sách' },
  { name: 'Sản phẩm khác' },
  { name: 'Thiết bị cho thuê' },
  { name: 'Tin mới nhất' },
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
    <div className="grid wide">
      <div className={cx('header')}>
        <div className={cx('header-inner')}>
          <div className={cx('bar-phone')} onClick={handleClickOpen}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div>
            <a href="/" className={cx('logo-header')}>
              <img src={images.logo} alt="logo"></img>
            </a>
          </div>
          <div className={cx('search')}>
            <input
              type="text"
              className={cx('search-input')}
              placeholder="Tìm kiếm "
            ></input>
            <FontAwesomeIcon
              className={cx('search-icon')}
              icon={faMagnifyingGlass}
            />
          </div>
          <div className={cx('information')}>
            {currentUser ? (
              <div className={cx('header-access')}>
                <button onClick={handleSignOut}>Log out</button>
              </div>
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
              <a href="/cart-user" className={cx('cart-wrapper')}>
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
        <div className={cx('header-list-item-pc')}>
          <ListNavPc navigation={NAVIGATION} />
        </div>

        {click && (
          <div className={cx('header-list')}>
            <div className={cx('icon-close')}>
              <FontAwesomeIcon icon={faXmark} onClick={handleClickClose} />
            </div>
            <div className={cx('search-mobile')}>
              <input
                type="text"
                className={cx('search-input-mobile')}
                placeholder="Tìm kiếm "
              ></input>
            </div>
            <ListNavMobile />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
