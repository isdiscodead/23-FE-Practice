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
        init: (state, action) => {
            state = [];
        },

        fetch: (state, action) => {

        },

        changeEmoji: (state, action) => {

        },

        delete: (state, action) => {

        },
    },
});

export default monthlySlice;
export const { init, fetch } = monthlySlice.actions;