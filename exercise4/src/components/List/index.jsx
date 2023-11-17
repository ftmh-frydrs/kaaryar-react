import React from 'react';
import OrderItem from '../ OrderItem';
import './style.css';

const List = ({ orders, maximumTotal }) => {
  const sellOrders = calculateTotal(orders.sort((a, b) => a.price - b.price).filter((order) => order.type === 'sell'));
  const buyOrders = calculateTotal(orders.sort((a, b) => b.price - a.price).filter((order) => order.type === 'buy'));
  
  

  return (
    <div className="list-container">
      <div className="list-section">
        {renderItems(sellOrders, maximumTotal)}
      </div>
      <div className="list-section">
        {renderItems(buyOrders, maximumTotal)}
      </div>
    </div>
  );
};

const renderItems = (orders, maximumTotal) => {
  return (
    <div className="list">
      {orders.map((order, index) => (
        <OrderItem
          key={index}
          amount={order.quantity}
          price={order.price}
          type={order.type}
          total={order.total}
          maximumTotal={maximumTotal}
        />
      ))}
    </div>
  );
};

const calculateTotal = (orders) => {
  let total = 0;
  return orders.map((order) => {
    total += order.quantity;
    return { ...order, total };
  });
};

export default List;