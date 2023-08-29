import { useAppDispatch, useAppSelector } from 'App/redux/hooks';
import { orderSelector, removeOrder } from 'App/redux/slices/orderSlice';

export const useOrders = () => {
  const orders = useAppSelector(orderSelector);
  const dispatch = useAppDispatch();

  const deleteOrder = (id: number) => {
    dispatch(removeOrder(id));
  };
  return { orders, deleteOrder };
};
