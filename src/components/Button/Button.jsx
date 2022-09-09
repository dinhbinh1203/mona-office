import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
  children,
  type,
  className,
  primary = false,
  white,
  black,
  onClick,
  red,
}) {
  const classes = cx('btn', {
    [className]: className,
    primary,
    white,
    black,
    red,
  });

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
