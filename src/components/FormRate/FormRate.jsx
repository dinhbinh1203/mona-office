import styles from './FormRate.module.scss';
import classNames from 'classnames/bind';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function FormRate() {
  return (
    <div className={cx('form-rate')}>
      <form>
        <FormInput
          name="text"
          type="text"
          required
          label="Nhận xét của bạn *"
        />
        <FormInput name="text" type="text" required label="Tên *" />
        <FormInput name="text" type="text" required label="Email *" />
        <Button primary>Gửi đi</Button>
      </form>
    </div>
  );
}

export default FormRate;
