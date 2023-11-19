import './style.css';

const Item = ({ title }) => {
    return (
      <div className='item'>
        <h5 className='title-todo'>{title}</h5>
        <p className='btn-x'>x</p>
      </div>
    );
  };

export default Item;