import { useAppDispatch, useAppSelector } from 'App/redux/hooks';
import {
  showProducts,
  showProductsSelector,
} from 'App/redux/slices/showProductsSlide';
import { IOpenStates } from 'App/types/types';

export const useShowProducts = () => {
  const showState = useAppSelector(showProductsSelector);
  const dispatch = useAppDispatch();

  const toggleShowProducts = (showData: IOpenStates) => {
    dispatch(showProducts(showData));
  };
  return { showState, toggleShowProducts };
};
