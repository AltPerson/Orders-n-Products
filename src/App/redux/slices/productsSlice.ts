import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'App/redux/store';
import { IMultiProducts, IProduct } from 'App/types/types';
import { products } from 'Data/data';

const initialState: IMultiProducts = products;
export const productSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    removeProduct: (state, action: PayloadAction<number>) => {
      return {
        ua: state.ua.filter((item: IProduct) => item.id !== action.payload),
        en: state.en.filter((item: IProduct) => item.id !== action.payload),
      };
    },
  },
});
export const { removeProduct } = productSlice.actions;
export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;
