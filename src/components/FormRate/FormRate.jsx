import PropTypes from 'prop-types';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { StarOne, StarTwo, StarThree, StarFour, StarFive } from '../Star/Star';

import styles from './FormRate.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

FormRate.propTypes = {
  name: PropTypes.node.isRequired,
};

function FormRate({ name }) {
  const [rate, changeRate] = useState({
    objects: [
      <StarOne />,
      <StarTwo />,
      <StarThree />,
      <StarFour />,
      <StarFive />,
    ],
    activeObjects: null,
  });

  const toggleActive = (index) => {
    changeRate({ ...rate, activeObjects: rate.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    if (rate.objects[index] === rate.activeObjects) {
      return 'star__item--active';
    } else {
      return 'star__item--inactive';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={cx('form__rate')}>
      <div className={cx('rate__star')}>
        <h3 className={cx('title__item')}>
          {` Hãy là người đầu tiên nhận xét "${name}"`}
        </h3>
        <div className={cx('star__title')}>Đánh giá của bạn</div>
        <div className={cx('star__container')}>
          {rate.objects.map((star, index) => (
            <div
              className={cx('star__item', toggleActiveStyles(index))}
              key={index}
              onClick={() => {
                toggleActive(index);
              }}
            >
              {star}
            </div>
          ))}
        </div>
      </div>
      <form>
        <FormInput name="text" type="text" required label="Tên *" comment />
        <FormInput name="text" type="text" required label="Tên *" />
        <FormInput name="text" type="text" required label="Email *" />
        <Button primary onClick={(e) => handleSubmit(e)}>
          Gửi đi
        </Button>
      </form>
    </div>
  );
}

export default FormRate;
