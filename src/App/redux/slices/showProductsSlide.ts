import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'App/redux/store';
import { IOpenStates } from 'App/types/types';

const initialState: IOpenStates = {
  id: 0,
  isOpen: false,
};
export const showProductsSlice = createSlice({
  name: 'showProducts',
  initialState,
  reducers: {
    showProducts: (state, action: PayloadAction<IOpenStates>) => {
      if (state.id === action.payload.id && state.isOpen) {
        return {
          id: action.payload.id,
          isOpen: false,
        };
      }
      return {
        id: action.payload.id,
        isOpen: true,
      };
    },
  },
});
export const { showProducts } = showProductsSlice.actions;
export const showProductsSelector = (state: RootState) =>
  state.showProductsReducer;
export default showProductsSlice.reducer;
