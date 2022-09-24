import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  white: PropTypes.bool,
  black: PropTypes.bool,
  red: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

function Button({
  children,
  type,
  className,
  primary,
  white,
  black,
  red,
  onClick,
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
