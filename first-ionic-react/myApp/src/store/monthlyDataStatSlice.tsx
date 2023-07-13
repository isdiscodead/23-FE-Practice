// 월간 데이터 통계 정보
import { dailyData } from "./monthlyDataListSlice";

import { createSlice } from "@reduxjs/toolkit";

// 전체 데이터 가져와서 ... 카운트 세고 ... 
// 총 상위 5개 사용
const initialState: dailyData[] = new Array(5);

const monthlyDataStatSlice = createSlice({
    name: "monthly-data-stat", // reateSlice()를 통해 slice를 생성 시 내부적으로 중복을 피하기 위해 사용되는 고유한 값
    initialState,
    reducers: {
        setMonthlyDataStat: (state, action) => {
            return state = action.payload;
        },
    },
});

export default monthlyDataStatSlice;
export const { setMonthlyDataStat } = monthlyDataStatSlice.actions;