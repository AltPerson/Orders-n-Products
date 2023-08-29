import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'App/redux/store';
import { IOpenStates, IOrder } from 'App/types/types';

const initialState: IOpenStates & Partial<IOrder> = {
  id: null,
  title: '',
  description: '',
  products: [],
  isOpen: false,
};

export const modalDeleteSlice = createSlice({
  name: 'modalDelete',
  initialState,
  reducers: {
    showModalDelete: (
      _,
      action: PayloadAction<IOpenStates & Partial<IOrder>>,
    ) => {
      return {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        products: action.payload.products,
        isOpen: action.payload.isOpen,
      };
    },
  },
});
export const { showModalDelete } = modalDeleteSlice.actions;
export const modalDeleteSelector = (state: RootState) =>
  state.modalDeleteReducer;
export default modalDeleteSlice.reducer;
