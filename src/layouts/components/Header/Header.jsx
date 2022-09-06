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

const cx = classNames.bind(styles);

function Header() {
  const [click, setClick] = useState(false);
  const handleClickOpen = () => setClick(true);
  const handleClickClose = () => setClick(false);

  const dispatch = useDispatch();

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
            <Link to="/" className={cx('logo-header')}>
              <img src={images.logo} alt="logo"></img>
            </Link>
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
                <Link to="/login" className={cx('access-content')}>
                  Đăng nhập
                </Link>
                <span> / </span>
                <Link to="/register" className={cx('access-content')}>
                  Đăng ký
                </Link>
              </div>
            )}
            <Tippy
              delay={[0, 200]}
              content="Xem giỏ hàng của bạn"
              placement="bottom"
            >
              <NavLink to="/cart-user" className={cx('cart-wrapper')}>
                <span className={cx('cart-name')}>Giỏ hàng</span>
                <div className={cx('cart-icon')}>
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                  <div className={cx('cart-number')}>0</div>
                </div>
              </NavLink>
            </Tippy>
          </div>
        </div>
        <div className={cx('header-list-item-pc')}>
          <ListNavPc />
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
