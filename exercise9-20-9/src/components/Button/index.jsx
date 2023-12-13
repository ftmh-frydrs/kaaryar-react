import './style.css'

const Button = ({ type, children, ...rest }) => {
  return (
    <button className="btn" type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
