// 월간 데이터 전체 정보 
import { createSlice } from "@reduxjs/toolkit";

export type dailyData = {
    emoji: string
    date: string
    content: string
}

const initialState: dailyData[] = new Array(42);

const monthlySlice = createSlice({
    name: "monthly-data", // reateSlice()를 통해 slice를 생성 시 내부적으로 중복을 피하기 위해 사용되는 고유한 값
    initialState,
    reducers: {
        setMonthlyDataList: (state, action) => {
            return state = action.payload;
        },

        deleteDay: (state, action) => {
            // date를 payload로 받아서 filter ?... 
        },
    },
});

export default monthlySlice;
export const { setMonthlyDataList, deleteDay } = monthlySlice.actions;