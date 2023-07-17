import { configureStore } from '@reduxjs/toolkit';

// 작성한 store slice들을 모아서 설정하는 파일 
import monthlySlice from './monthlyDataListSlice';
import dateSlice from './dateSlice';
import monthlyDataStatSlice from './monthlyDataStatSlice';
import selectedDateSlice from './selectedDateSlice';

export const store = configureStore({
    // 사용할 reducer들을 모두 작성 ... reducers가 아님 !! 주의 !! 
    reducer: {
        monthlyDataList: monthlySlice.reducer,
        date: dateSlice.reducer,
        monthlyDataStat: monthlyDataStatSlice.reducer,
        selectedDate: selectedDateSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;