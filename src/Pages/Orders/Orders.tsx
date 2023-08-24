import './Orders.scss';
import { FC } from 'react';
import { orders } from 'Data/data';
const Orders: FC = () => {
  console.log(orders);
  return <div className="orders"></div>;
};
export default Orders;
