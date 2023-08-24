import { IOrders } from 'App/types/types';
import { orders } from 'Data/data';

export function getOrderTitle(id: number): string {
  console.log('Id', id);
  let title;
  for (let order of orders) {
    if (order.id === id) {
      title = order.title;
    }
  }
  return title;
}
