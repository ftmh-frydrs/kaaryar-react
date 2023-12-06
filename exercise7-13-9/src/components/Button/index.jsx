import React from 'react';
import './style.css';

const Button = ({
  children,
  variant,
  look,
  size,
  disabled,
  onClick,
  as,
  textColor,
  ...rest
}) => {
  const buttonClasses = `button ${variant} ${look} ${size} ${disabled ? 'disabled' : ''}`;

  if (as === 'a') {
    return (
      <a
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

Button.VARIANTS = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
};

Button.LOOKS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
};

Button.SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export default Button;
