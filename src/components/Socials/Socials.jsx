import styles from './Socials.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const SOCIALS = [
  {
    title: 'Facebook',
    color: '#4769A5',
    icon: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    title: 'Twitter',
    color: '#65CCEF',
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    title: 'Google',
    color: '#EA4335',
    icon: <FontAwesomeIcon icon={faGooglePlusG} />,
  },
  {
    title: 'Pinterest',
    color: '#cd252b',
    icon: <FontAwesomeIcon icon={faPinterestP} />,
  },
  {
    title: 'LinkedinIn',
    color: '#2ba3e1',
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
];

const cx = classNames.bind(styles);

function Socials() {
  return (
    <div className={cx('socials', 'row')}>
      {SOCIALS.map((social, index) => (
        <div
          style={{ backgroundColor: social.color }}
          key={index}
          className={cx('item__social', 'col', 'c-4', 'm-4', 'l-2')}
        >
          <div className={cx('social__icon')}>{social.icon}</div>
          <div className={cx('social__title')}>{social.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Socials;
