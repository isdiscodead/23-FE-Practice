// 월간 데이터 전체 정보 
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { useSelector } from "react-redux";

export type dailyData = {
    emoji: string
    date: string
    content: string
}

// 요일 찾기 
const getDay = (year_str: string, month_str: string): number => {
    let y = parseInt(year_str);
    let m = Number.parseInt(month_str);
  
    if ( m <= 2 ) {
      m += 12;
      y -= 1;
    } 
  
    // Zeller's Congruence
    const k = y%100;
      const j = parseInt(y/100+"");
          
      return ((1 + Math.floor(13*(m+1)/5) + k + Math.floor(k/4) + Math.floor(j/4) + 5*j ) + 6) % 7;
  }
  
  
  // 전체 날짜 개수
  const getDateCnt = (year:string, month:string) => {
    const date = new Date(parseInt(year), parseInt(month), 0)
    return date.getDate();
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