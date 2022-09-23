import styles from './ProductNew.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProductNew({ newItem }) {
  const stringToArray = (string) => {
    const myArray = string.split('\n');
    return myArray;
  };

  return (
    <div className={cx('new__item')}>
      <div className={cx('new__image')}>
        <img alt="product" src={newItem.imageUrl}></img>
      </div>
      <div className={cx('wrapper__content')}>
        <h5 className={cx('new__title')}>{newItem.name}</h5>
        <div className={cx('new__description')}>
          {stringToArray(newItem.description)
            .filter((_, idx) => idx < 3)
            .map((detailDescription, index) => (
              <div className={cx('detail__description')} key={index}>
                {detailDescription}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductNew;
