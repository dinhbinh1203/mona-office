import styles from './ListNavPc.module.scss';
import classNames from 'classnames/bind';
import LIST_ITEMS from '../../ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function ListNavPc() {
  return (
    <ul className={cx('list')}>
      {LIST_ITEMS.map((list, index) => (
        <li className={cx('item')} key={index}>
          <div className={cx('item-title')}>
            <div className={cx('item-title-content')}>{`${list.title}`}</div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={cx('item-title-icon')}
            />
          </div>

          <ul className={cx('item-list')}>
            {list.item.map((item) => (
              <li className={cx('item-children')}>{`${item.name}`}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ListNavPc;
