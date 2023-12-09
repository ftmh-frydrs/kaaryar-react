import './style.css'

const Header = ({children}) => {
  return (
    <div className='header'>
        <h5>{children}</h5>
    </div>
  );
};

export default Header;
