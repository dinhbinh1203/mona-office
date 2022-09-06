import styles from './SubNav.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SubNav({ list }) {
  const [dropdown, setDropDown] = useState(false);
  const handleClickSetDropDown = () => setDropDown(!dropdown);

  return (
    <li className={cx('item')}>
      <div className={cx('item-title')} onClick={handleClickSetDropDown}>
        <div className={cx('item-title-content')}>{`${list.title}`}</div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={cx('item-title-icon')}
        />
      </div>
      {dropdown && (
        <ul className={cx('item-list')}>
          {list.item.map((item) => (
            <li className={cx('item-children')}>{`${item.name}`}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default SubNav;
