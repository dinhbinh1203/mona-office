import styles from './Rules.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RULES = [
  'Miễn phí giao hàng tất cả quận huyện thuộc TP.HCM, Hà Nội, Biên Hòa và một số quận thuộc Bình Dương',
  'Miễn phí 1 đổi 1 nếu hàng bị lỗi',
];

function Rules() {
  return (
    <div className={cx('content__promotion')}>
      {RULES.map((rule, index) => (
        <div className={cx('promotion__detail')} key={index}>
          <span
            className={cx(
              'material-symbols-outlined',
              'promotion__detail--icon',
            )}
          >
            done
          </span>
          <span>{rule}</span>
        </div>
      ))}
    </div>
  );
}

export default Rules;
