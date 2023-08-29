import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'App/redux/store';
import { ITimeFormats } from 'App/types/types';
import { getDate } from 'Utils/getDate';
import { getTime } from 'Utils/getTime';

const initialState: ITimeFormats = {
  date: {
    ua: getDate(),
    en: getDate('', true),
  },
  shortFormat: getTime(),
  longFormat: getTime(true),
};
export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    updateTime: () => {
      return {
        date: {
          ua: getDate(),
          en: getDate('', true),
        },
        shortFormat: getTime(),
        longFormat: getTime(true),
      };
    },
  },
});
export const { updateTime } = timeSlice.actions;
export const timeSelector = (state: RootState) => state.timeReducer;
export default timeSlice.reducer;
