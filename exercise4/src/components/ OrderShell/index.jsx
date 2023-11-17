import Header from '../Header';
import List from '../List';
import './style.css'
import ordersData from '../../data/orders.json';

const OrderShell = () => {

  const maximumTotal = Math.max(...ordersData.map(order => Number(order.total) || 0));
  console.log(maximumTotal);
  return (
    <div className="OrderShell">
      <Header />
      <List orders={ordersData} maximumTotal={maximumTotal} />
    </div>
  );
};

export default OrderShell;

