import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/orderSlice';
import showProductsReducer from './slices/showProductsSlide';
import modalDeleteReducer from './slices/modalDeleteSlice';
import timeReducer from './slices/timeSlice';
import productReducer from './slices/productsSlice';
export const store = configureStore({
  reducer: {
    orderReducer,
    showProductsReducer,
    modalDeleteReducer,
    timeReducer,
    productReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
