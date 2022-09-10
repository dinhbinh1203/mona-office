import styles from './FormRate.module.scss';
import classNames from 'classnames/bind';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StarOne, StarTwo, StarThree, StarFour, StarFive } from '../Star/Star';

const cx = classNames.bind(styles);

const STARS = [
  <StarOne />,
  <StarTwo />,
  <StarThree />,
  <StarFour />,
  <StarFive />,
];

function FormRate() {
  return (
    <div className={cx('form__rate')}>
      <div className={cx('rate__star')}>
        <h3 className={cx('title__item')}>
          Hãy là người đầu tiên nhận xét “Bìa còng King Jim 10f”
        </h3>
        <div className={cx('star__title')}>Đánh giá của bạn</div>
        <div className={cx('star__container')}>
          {STARS.map((star) => (
            <div className={cx('star__item')}>{star}</div>
          ))}
        </div>
      </div>
      <form>
        <FormInput name="text" type="text" required label="Tên *" comment />
        <FormInput name="text" type="text" required label="Tên *" />
        <FormInput name="text" type="text" required label="Email *" />
        <Button primary>Gửi đi</Button>
      </form>
    </div>
  );
}

export default FormRate;
