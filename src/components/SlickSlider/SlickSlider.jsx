import styles from './SlickSlider.module.scss';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import images from '../../assets/images';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function SlickSlider() {
  var settings = {
    rtl: true,
  };
  return (
    <Slider {...settings}>
      <div className={cx('slider__slider')}>
        <div className={cx('slider__slider--image')}>
          <img
            src={images.backGroundHeaderSecond}
            alt="backGround"
            className={cx('image__header')}
          ></img>
          <div className={cx('overlay')}></div>
        </div>
        <div className={cx('content')}>
          <div className={cx('content__title')}>Văn phòng phẩm</div>
          <div className={cx('content__name')}>Mona Office</div>
          <div className={cx('content__description')}>
            Chuyên bán lẻ các dụng cụ, thiết bị văn phòng. Nhận cung cấp cho các
            công ty, trường học với số lượng lớn, đảm bảo hàng uy tín, chất
            lượng
          </div>
          <div className={cx('content__btn')}>
            <Button black>Xem sản phẩm</Button>
          </div>
        </div>
      </div>
      <div className={cx('slider__slider')}>
        <div className={cx('slider__slider--image')}>
          <img
            src={images.backGroundHeaderFirst}
            alt="backGround"
            className={cx('image__header')}
          ></img>
          <div className={cx('overlay')}></div>
        </div>
        <div className={cx('content')}>
          <div className={cx('discount')}>
            <div className={cx('discount__content')}>
              Ưu đãi giảm giá
              <strong className={cx('discount__number')}> 10% </strong>
              cho tất cả các sản phẩm
            </div>
            <div className={cx('discount__description')}>
              Thời gian từ 1/9/2022 đến hết 30/9/2022. Áp dụng cho học sinh,
              sinh viên
            </div>
          </div>
          <Button white>Xem sản phẩm</Button>
        </div>
      </div>
    </Slider>
  );
}

export default SlickSlider;
