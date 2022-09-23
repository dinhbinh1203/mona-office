import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CONTACTS = [
  {
    content: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM',
    icon: (
      <span className={cx('material-symbols-outlined', 'icon')}>home_pin</span>
    ),
  },
  {
    content: '076 922 0162',
    icon: <span className={cx('material-symbols-outlined', 'icon')}>call</span>,
  },
  {
    content: 'demonhunterg@gmail.com',
    icon: <span className={cx('material-symbols-outlined', 'icon')}>mail</span>,
  },
];

const POLICIES = [
  {
    content: 'Chính Sách Bán Hàng',
  },
  {
    content: 'Chính Sách Giao Hàng & Lắp Đặt',
  },
  {
    content: 'Chính Sách Đổi Trả',
  },
  {
    content: 'Chính Sách Bảo Hành & Bảo Trì',
  },
];

function Footer() {
  return (
    <div className="grid wide">
      <div className={cx('footer', 'row')}>
        <div className={cx('footer__name', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('name__page')}>MONA OFFICE</div>
          <div className={cx('name__description')}>
            Chuyên bán lẻ các dụng cụ, thiết bị văn phòng. Nhận cung cấp cho các
            công ty, trường học với số lượng lớn, đảm bảo hàng uy tín, chất
            lượng
          </div>
        </div>
        <div className={cx('footer__item', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('item__title')}>Văn phòng</div>
          {CONTACTS.map((contact, index) => (
            <div key={index} className={cx('item__container')}>
              <div className={cx('item__icon')}>{contact.icon}</div>
              <div className={cx('item__content')}>{contact.content}</div>
            </div>
          ))}
        </div>
        <div className={cx('footer__item', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('item__title')}>Dịch vụ</div>
          {POLICIES.map((policy, index) => (
            <div key={index} className={cx('item__container')}>
              <div className={cx('item__content', 'item__policy')}>
                {policy.content}
              </div>
            </div>
          ))}
        </div>
        <div className={cx('footer__item', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('item__title')}>Đăng ký</div>
          <div className={cx('item__container', 'item__send')}>
            <div className={cx('item__content')}>
              Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
            </div>
            <div className={cx('item__input')}>
              <input placeholder="Email" />
              <div className={cx('input__icon')}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
