import styles from './ListNavPc.module.scss';
import classNames from 'classnames/bind';
import LIST_ITEMS from '../../ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const changeSpaceToDash = (str) => {
  return str.replace(/ /g, '-');
};

function ListNavPc({ navigation }) {
  return (
    <ul className={cx('list')}>
      {navigation.map((item, index) => (
        <li className={cx('item')} key={index}>
          <div className={cx('item__title')}>
            {item.href && (
              <a href={item.href}>
                <div
                  className={cx('item__title--content')}
                >{`${item.name}`}</div>
              </a>
            )}
            {!item.href && (
              <a href={`/shop/${changeSpaceToDash(item.name)}`}>
                <div
                  className={cx('item__title--content')}
                >{`${item.name}`}</div>
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListNavPc;
