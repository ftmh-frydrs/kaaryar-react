import "./style.css";

const Button = ({
  children,
  variant = Button.VARIANTS.FILLED,
  look = Button.LOOKS.PRIMARY,
  size = Button.SIZES.MEDIUM,
  disabled,
  as,
  href,
  target,
  className,
  type,
  onClick,
  ...rest
}) => {

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }

  };

  const buttonClasses = `button ${variant} ${look} ${size} ${
    disabled ? "disabled" : ""
  }`;

  if (as === "a") {
    return (
      <a
        className={buttonClasses}
        onClick={handleClick}
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
        onClick={handleClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

Button.VARIANTS = {
  FILLED: "filled",
  OUTLINED: "outlined",
};

Button.LOOKS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  DARK: "dark",
};

Button.SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export default Button;
