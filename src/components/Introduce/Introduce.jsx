import PropTypes from 'prop-types';
import styles from './Introduce.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

Introduce.propTypes = {
  item: PropTypes.node.isRequired,
};

function Introduce({ item }) {
  return (
    <div className={cx('introduce')}>
      <div className={cx('introduce__icon')}>
        <span className="material-symbols-outlined">{item.icon}</span>
      </div>
      <div className={cx('introduce__content')}>
        <div className={cx('introduce__content--title')}>{item.title}</div>
        <div className={cx('introduce__content--description')}>
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default Introduce;
