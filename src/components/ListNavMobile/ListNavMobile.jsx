import LIST_ITEMS from '../../ListItem';
import SubNav from '../SubNav/SubNav';

import styles from './ListNavMobile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ListNavMobile() {
  return (
    <div className={cx('navbar')}>
      <ul className={cx('list')}>
        {LIST_ITEMS.map((listItem, index) => (
          <SubNav key={index} list={listItem} />
        ))}
      </ul>
    </div>
  );
}

export default ListNavMobile;
