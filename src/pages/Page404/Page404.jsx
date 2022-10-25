import React from 'react';

import styles from './Page404.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images';

const cx = classNames.bind(styles);

function Page404() {
  return (
    <div className="grid wide">
      <div className={cx('page__404')}>
        <img src={images.error} alt="no-result" />
      </div>
    </div>
  );
}

export default Page404;
