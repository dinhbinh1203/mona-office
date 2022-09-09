import styles from './Rate.module.scss';
import classNames from 'classnames/bind';
import FormRate from '../FormRate/FormRate';

const cx = classNames.bind(styles);

function Rate() {
  return (
    <div className={cx('rate')}>
      <div className={cx('title')}>
        <h3 className={cx('title-main')}>Đánh giá</h3>
        <p className={cx('title-number')}>Chưa có đánh giá nào</p>
      </div>
      <div className={cx('review-form')}>
        <div className={cx('review-form--inner')}>
          <div className={cx('new-respond')}>
            <h3 className={cx('new-respond--title')}>
              Hãy là người đầu tiên nhận xét “Bìa còng King Jim 10f”{' '}
            </h3>
            <FormRate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
