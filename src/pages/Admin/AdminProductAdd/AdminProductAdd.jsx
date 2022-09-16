import styles from './AdminProductAdd.module.scss';
import classNames from 'classnames/bind';
import FormInput from '../../../components/FormInput/FormInput';
import {
  selectCategories,
  selectCategoriesIsLoading,
} from '../../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading/Loading';
import { default as ButtonDefault } from '../../../components/Button/Button';

import * as React from 'react';

const cx = classNames.bind(styles);

function AdminProductAdd() {
  const categories = useSelector(selectCategories);
  const isLoadingCategories = useSelector(selectCategoriesIsLoading);

  return (
    <>
      <div className={cx('categories', 'grid', 'wide')}>
        {isLoadingCategories ? (
          <div className={cx('is__loading')}>
            <Loading />
          </div>
        ) : (
          <div className={cx('admin__add', 'row')}>
            <div
              className={cx('admin__add--title', 'col', 'c-12', 'l-12', 'm-12')}
            >
              Thêm sản phẩm
            </div>
            <div className={cx('admin__add--form', 'col', 'c-6', 'l-6', 'm-6')}>
              <form>
                <FormInput
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                  label="Tên sản phẩm"
                />
                <FormInput
                  name="email"
                  placeholder="Link ảnh"
                  type="email"
                  required
                  label="Link ảnh"
                />
                <FormInput
                  name="email"
                  placeholder="Giá trước đây"
                  type="number"
                  required
                  label="Giá trước đây"
                />
                <FormInput
                  name="email"
                  placeholder="Giá bán"
                  type="number"
                  required
                  label="Giá bán"
                />
                <FormInput
                  name="email"
                  placeholder="Mô tả sản phẩm"
                  type="text"
                  required
                  label="Mô tả sản phẩm"
                  comment
                />
                {categories?.map((category) => (
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <p>{category.title}</p>
                  </div>
                ))}
                <ButtonDefault primary>Thêm sản phẩm</ButtonDefault>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminProductAdd;
