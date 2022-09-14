import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading/Loading';

import {
  selectProducts,
  selectProductsIsLoading,
} from '../../../store/products/products.selector';

import {
  selectCategoriesIsLoading,
  selectCategories,
} from '../../../store/categories/categories.selector';

import DescriptionProduct from '../../../components/DescriptionProduct/DescriptionProduct';

import Rate from '../../../components/Rate/Rate';
import Button from '../../../components/Button/Button';

import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PROMOTIONS = [
  'Miễn phí giao hàng tất cả quận huyện thuộc TP.HCM, Hà Nội, Biên Hòa và một số quận thuộc Bình Dương',
  'Miễn phí 1 đổi 1 nếu hàng bị lỗi',
];

function ProductDetail() {
  const { name } = useParams();
  const categories = useSelector(selectCategories);
  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const products = useSelector(selectProducts);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const changeSpaceToDash = (str) => {
    return str.replaceAll(' ', '-');
  };

  const changeDashToSpace = (str) => {
    return str.replaceAll('-', ' ');
  };

  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  return (
    <div>
      {isLoadingProducts || isLoadingCategories ? (
        <div className={cx('is-loading')}>
          <Loading />
        </div>
      ) : (
        <div className={cx('product__detail')}>
          {products !== undefined &&
            products
              .filter((list) => list.name === changeDashToSpace(name))
              .map((item) => (
                <div key={item.id} className={cx('detail', 'grid', 'wide')}>
                  <div className={cx('title', 'row')}>
                    <a href="/">
                      <span>Trang chủ</span>/
                    </a>
                    <a href="/shop">
                      <span> Tất cả sản phẩm MONA</span>/
                    </a>

                    {categories !== undefined &&
                      categories
                        .filter((list) => list.id === item.categoryId)
                        .map((list) => (
                          <a href={`/shop/${list.title}`} key={list.id}>
                            <span className={cx('title__list')}>
                              {'  '}
                              {list.title}
                            </span>
                          </a>
                        ))}
                  </div>
                  <div className={cx('container', 'row')}>
                    <div
                      className={cx(
                        'product__image',
                        'col',
                        'l-6',
                        'm-12',
                        'c-12',
                      )}
                    >
                      <img src={item.imageUrl} alt="product"></img>
                    </div>
                    <div
                      className={cx(
                        'product__content',
                        'col',
                        'l-6',
                        'm-12',
                        'c-12',
                      )}
                    >
                      <div className={cx('content__title')}>{item.name}</div>
                      <div className={cx('content_-divider')}></div>
                      {item.price && (
                        <div className={cx('content__price')}>
                          {item.prevPrice && (
                            <div className={cx('content__price--prev')}>
                              {`${formatMoney(item.prevPrice)}`}₫
                            </div>
                          )}
                          <div className={cx('content__price--now')}>
                            {`${formatMoney(item.price)}`}₫
                          </div>
                        </div>
                      )}
                      <div className={cx('content__description')}>
                        {item.description
                          .filter((_, idx) => idx < 3)
                          .map((detailDescription, index) => (
                            <div
                              className={cx('detail__description')}
                              key={index}
                            >
                              {detailDescription}
                            </div>
                          ))}
                      </div>
                      <div className={cx('content__selector')}>
                        <div className={cx('selector__quantity')}>
                          <span className={cx('quantity__btn')}>-</span>
                          <input
                            type="button"
                            value="1"
                            min="1"
                            className={cx('quantity__number')}
                          />
                          <span className={cx('quantity__btn')}>+</span>
                        </div>
                        {item.normal && (
                          <>
                            <Button primary className={cx('selector__add')}>
                              THÊM VÀO GIỎ
                            </Button>
                            <Button red className={cx('selector__add')}>
                              MUA NGAY
                            </Button>
                          </>
                        )}
                        {item.rent && (
                          <>
                            <Button primary className={cx('selector__add')}>
                              LIÊN HỆ
                            </Button>
                          </>
                        )}
                      </div>
                      <div className={cx('content__promotion')}>
                        {PROMOTIONS.map((promotion, index) => (
                          <div className={cx('promotion__detail')} key={index}>
                            <span
                              className={cx(
                                'material-symbols-outlined',
                                'promotion__detail--icon',
                              )}
                            >
                              done
                            </span>
                            <span>{promotion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={cx('table', 'row')}>
                    <div
                      className={cx(
                        'table__choose',
                        'col',
                        'c-12',
                        'l-12',
                        'm-12',
                      )}
                    >
                      <div className={cx('choose__title')}>
                        <div
                          className={cx(
                            'choose__title--item',
                            activeTab === 'tab1' ? 'active' : '',
                          )}
                          onClick={handleTab1}
                        >
                          Mô tả
                        </div>
                        <div
                          className={cx(
                            'choose__title--item',
                            activeTab === 'tab2' ? 'active' : '',
                          )}
                          onClick={handleTab2}
                        >
                          Đánh giá (0)
                        </div>
                      </div>
                      <div className={cx('choose__container')}>
                        {activeTab === 'tab1' ? (
                          <DescriptionProduct
                            name={item.name}
                            list={item.description}
                          />
                        ) : (
                          <Rate name={item.name} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
