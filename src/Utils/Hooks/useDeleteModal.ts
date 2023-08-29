import { useAppDispatch, useAppSelector } from 'App/redux/hooks';
import {
  showModalDelete,
  modalDeleteSelector,
} from 'App/redux/slices/modalDeleteSlice';
import { IOpenStates, IOrder } from 'App/types/types';

export const useDeleteModal = () => {
  const modalState = useAppSelector(modalDeleteSelector);
  const dispatch = useAppDispatch();

  const toogleDeleteModal = (showData: IOpenStates & Partial<IOrder>) => {
    dispatch(showModalDelete(showData));
  };
  return { modalState, toogleDeleteModal };
};
