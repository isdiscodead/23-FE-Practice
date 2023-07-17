import { createSlice } from "@reduxjs/toolkit";

const initialState: string = new Date().toISOString().substring(0, 10);

const selectedDateSlice = createSlice({
    name: "selected-date", // reateSlice()를 통해 slice를 생성 시 내부적으로 중복을 피하기 위해 사용되는 고유한 값
    initialState,
    reducers: {
        setSelectedDate: (state, action) => {
            state = initialState;
        },
    },
});

export default selectedDateSlice;
export const { setSelectedDate } = selectedDateSlice.actions;