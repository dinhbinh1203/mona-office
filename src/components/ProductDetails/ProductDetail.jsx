import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import {
  selectProducts,
  selectProductsIsLoading,
} from '../../store/products/products.selector';
import {
  selectCategoriesIsLoading,
  selectCategories,
} from '../../store/categories/categories.selector';

import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import Rate from '../Rate/Rate';

const cx = classNames.bind(styles);

function ProductDetail() {
  const { name } = useParams();
  const categories = useSelector(selectCategories);
  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const products = useSelector(selectProducts);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  return (
    <div>
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is-loading')}>
          <Loading />
        </div>
      ) : (
        <div className={cx('product-detail')}>
          {products.data !== undefined &&
            products.data
              .filter((list) => list.name === name)
              .map((item) => (
                <div key={item.id} className={cx('detail', 'grid', 'wide')}>
                  <div className={cx('title', 'row')}>
                    <Link to="/">
                      <span>Trang chủ</span>/
                    </Link>
                    <Link to="/shop">
                      <span> Tất cả sản phẩm MONA</span>/
                    </Link>

                    {categories.data !== undefined &&
                      categories.data
                        .filter((list) => list.id === item.categoryId)
                        .map((list) => (
                          <Link to={`/shop/${list.id}`} key={list.id}>
                            <span className={cx('title-list')}>
                              {'  '}
                              {list.title}
                            </span>
                          </Link>
                        ))}
                  </div>
                  <div className={cx('container', 'row')}>
                    <div
                      className={cx(
                        'product-image',
                        'col',
                        'l-6',
                        'm-6',
                        'c-6',
                      )}
                    >
                      <img src={item.imageUrl} alt="product"></img>
                    </div>
                    <div
                      className={cx(
                        'product-content',
                        'col',
                        'l-6',
                        'm-6',
                        'c-6',
                      )}
                    >
                      <div className={cx('content-title')}>{item.name}</div>
                      <div className={cx('content-divider')}></div>
                      {item.price && (
                        <div className={cx('content-price')}>
                          {item.prevPrice && (
                            <div className={cx('content-price--prev')}>
                              {`${formatMoney(item.prevPrice)}`}₫
                            </div>
                          )}
                          <div className={cx('content-price--now')}>
                            {`${formatMoney(item.price)}`}₫
                          </div>
                        </div>
                      )}
                      <div className={cx('content-description')}>
                        {item.description
                          .filter((_, idx) => idx < 3)
                          .map((detailDescription) => (
                            <div className={cx('detail-description')}>
                              {detailDescription}
                            </div>
                          ))}
                      </div>
                      <div className={cx('content-selector')}>
                        <div className={cx('selector-quantity')}>
                          <span className={cx('quantity-btn')}>-</span>
                          <input
                            type="button"
                            value="1"
                            min="1"
                            className={cx('quantity-number')}
                          />
                          <span className={cx('quantity-btn')}>+</span>
                        </div>
                        <Button primary className={cx('selector-add')}>
                          THÊM VÀO GIỎ
                        </Button>
                        <Button red className={cx('selector-add')}>
                          MUA NGAY
                        </Button>
                      </div>
                      <div className={cx('content-promotion')}>
                        <div className={cx('promotion-detail')}>
                          <span
                            className={cx(
                              'material-symbols-outlined',
                              'promotion-icon',
                            )}
                          >
                            done
                          </span>
                          <span>
                            Miễn phí giao hàn tất cả quận huyện thuộc TP.HCM, Hà
                            Nội, Biên Hòa và một số quận thuộc Bình Dương
                          </span>
                        </div>
                        <div className={cx('promotion-detail')}>
                          <span
                            className={cx(
                              'material-symbols-outlined',
                              'promotion-icon',
                            )}
                          >
                            done
                          </span>
                          <span>Miễn phí 1 đổi 1 nếu hàng bị lỗi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('table', 'row')}>
                    <Rate />
                  </div>
                </div>
              ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
