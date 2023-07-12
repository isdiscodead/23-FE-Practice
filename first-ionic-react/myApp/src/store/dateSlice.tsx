import { createSlice } from "@reduxjs/toolkit";

export type dateData = {
    today: Date
    year: string
    month: string
    day: string
}

const initialState: dateData = {
    today: new Date(),
    year: new Date().getFullYear().toString(),
    // month = 01 ~ 09, 10, 11, 12
    month: ( (new Date().getMonth()) > 8 ? (new Date().getMonth()+1)+"" : "0" + (new Date().getMonth()+1) ),
    day: new Date().getDay().toString(),
};

const dateSlice = createSlice({
    name: "date", // reateSlice()를 통해 slice를 생성 시 내부적으로 중복을 피하기 위해 사용되는 고유한 값
    initialState,
    reducers: {
        init: (state, action) => {
            state = initialState;
        },

        incMonth: (state, action) => {
            const month = Number(state.month)+1;
            state.month = (month > 9 ? month.toString() : "0" + month);
            if ( Number(state.month) > 12 ) {
                state.month = "01";
                state.year = ((Number(state.year)+1).toString());
            }
        },

        decMonth: (state, action) => {
            const month = Number(state.month)-1;
            state.month = (month > 9 ? month.toString() : "0" + month);
            if ( Number(state.month) < 1 ) {
                state.month = "12";
                state.year = ((Number(state.year)-1).toString());
            }
        },
    },
});

export default dateSlice;
export const { init, incMonth, decMonth } = dateSlice.actions;