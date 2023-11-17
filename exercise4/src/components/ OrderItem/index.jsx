import React from 'react';
import './style.css';

const OrderItem = ({ amount, price, type, total, maximumTotal }) => {


  const remainingQuantity = type === 'buy' ? total - amount : total;
  const percentageWidth = (total / maximumTotal) * 100;

  const backgroundColor = type === 'buy' ? '#DFFFE7' : '#FDE4E4';
  const positionClass = type === 'buy' ? 'buy' : 'sell';


  const widthStyle = {
    width: `${percentageWidth.toFixed(2)}%`,
  };

  const buyPriceStyle = {
    backgroundColor,
    ...widthStyle,
  };

  return (
    <div className={`orderItem ${positionClass}`}>
      <div style={type === 'buy' ? buyPriceStyle : null}>{type === 'buy' ? price : amount}</div>
      <div> {remainingQuantity}</div>
      <div style={type === 'sell' ? buyPriceStyle : null}>{type === 'sell' ? price : amount}</div>
    </div>
  );
};

export default OrderItem;
