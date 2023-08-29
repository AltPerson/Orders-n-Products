import { useAppDispatch, useAppSelector } from 'App/redux/hooks';
import { timeSelector, updateTime } from 'App/redux/slices/timeSlice';

export const useTime = () => {
  const time = useAppSelector(timeSelector);
  const dispatch = useAppDispatch();
  const checkTime = () => dispatch(updateTime());
  return { time, checkTime };
};
