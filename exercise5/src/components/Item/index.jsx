import './style.css';

const Item = ({ title }) => {
    return (
      <div className='item'>
        <p>{title}</p>
      </div>
    );
  };

export default Item;