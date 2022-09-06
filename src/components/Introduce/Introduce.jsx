import styles from './Introduce.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Introduce({ item }) {
  return (
    <div className={cx('introduce')}>
      <div className={cx('introduce-icon')}>
        <span className="material-symbols-outlined">{item.icon}</span>
      </div>
      <div className={cx('introduce-content')}>
        <div className={cx('introduce-content--title')}>{item.title}</div>
        <div className={cx('introduce-content--description')}>
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default Introduce;
