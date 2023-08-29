import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'App/redux/store';
import { IMultiOrders, IOrder } from 'App/types/types';
import { ordersData } from 'Data/data';

const initialState: IMultiOrders = ordersData;
export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    removeOrder: (state, action: PayloadAction<number>) => {
      return {
        ua: state.ua.filter((item: IOrder) => item.id !== action.payload),
        en: state.en.filter((item: IOrder) => item.id !== action.payload),
      };
    },
  },
});
export const { removeOrder } = orderSlice.actions;
export const orderSelector = (state: RootState) => state.orderReducer;
export default orderSlice.reducer;
