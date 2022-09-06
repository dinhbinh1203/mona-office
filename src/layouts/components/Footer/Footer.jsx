import images from '../../../assets/images';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
    <div className={cx('grid', 'wide')}>
      <div className={cx('footer', 'row')}>
        <div className={cx('footer-logo', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('logo-img')}>
            <img src={images.logo} alt="logo" />
          </div>
          <div className={cx('logo-description')}>
            Chuyên bán lẻ các dụng cụ, thiết bị văn phòng. Nhận cung cấp cho các
            công ty, trường học với số lượng lớn, đảm bảo hàng uy tín, chất
            lượng
          </div>
        </div>
        <div className={cx('footer-item', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('item-title')}>Văn phòng</div>
          {CONTACTS.map((contact, index) => (
            <div key={index} className={cx('item-container')}>
              <div className={cx('item-icon')}>{contact.icon}</div>
              <div className={cx('item-content')}>{contact.content}</div>
            </div>
          ))}
        </div>
        <div className={cx('footer-item', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('item-title')}>Dịch vụ</div>
          {POLICIES.map((policy, index) => (
            <div key={index} className={cx('item-container')}>
              <div className={cx('item-content', 'item-policy')}>
                {policy.content}
              </div>
            </div>
          ))}
        </div>
        <div className={cx('footer-item', 'col', 'c-12', 'l-3', 'm-6')}>
          <div className={cx('item-title')}>Đăng ký</div>
          <div className={cx('item-container', 'item-send')}>
            <div className={cx('item-content')}>
              Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
            </div>
            <div className={cx('item-input')}>
              <input placeholder="Email" />
              <div className={cx('input-icon')}>
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
