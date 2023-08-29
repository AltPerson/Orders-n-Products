import { useAppDispatch, useAppSelector } from 'App/redux/hooks';
import { productSelector, removeProduct } from 'App/redux/slices/productsSlice';

export const useProducts = () => {
  const products = useAppSelector(productSelector);
  const dispatch = useAppDispatch();

  const deleteProduct = (id: number) => {
    dispatch(removeProduct(id));
  };
  return { products, deleteProduct };
};
