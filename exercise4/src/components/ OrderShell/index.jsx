import Header from '../Header';
import List from '../List';
import './style.css'
import ordersData from '../../data/orders.json';

const OrderShell = () => {

  const maximumTotal = Math.max(...ordersData.map(order => order.total));
  console.log(maximumTotal);
  return (
    <div className="OrderShell">
      <Header />
      <List orders={ordersData} maximumTotal={maximumTotal} />
    </div>
  );
};

export default OrderShell;
