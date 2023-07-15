import { useEffect, useState } from 'react'
import CalendarItem from './CalendarItem'
import { styled } from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { setMonthlyDataList } from '../../store/monthlyDataListSlice'

export type dailyData = {
  emoji: string
  date: string
  content: string
}

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  place-items: center;
  padding-bottom: 15px;
`;


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


function CalendarList() {
  const dispatch = useDispatch();

  const { today, month, year } = useSelector((state: RootState) => {
      return state.date;
  });

  const nowMonthNum = new Date().getMonth()+1;
  const nowMonth = nowMonthNum > 9 ? nowMonthNum.toString() : "0" + nowMonthNum;

  const dataList = useSelector((state: RootState) => {
      return state.monthlyDataList;
  });

  // 기본 값 초기화
  useEffect(() => {
    fetch(`https://c5cfc4c0-80f9-455a-842c-bacd08616bb9.mock.pstmn.io/api/month?month=${Number(month)}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // 초기값 넣기
      let newArr = [...dataList];
      let curIdx = 0;
      let dayIdx = 0;

      // 선택한 달의 1일에 맞는 요일부터 시작
      const startIdx = getDay(year, month);

      for ( let i=0; i < dataList.length ; i++ ) {
        newArr[i] = {
          emoji: "",
          date: ( i < startIdx ) || ( i - startIdx >= getDateCnt(year, month) ) ? "" : year + "-" + month + "-" + (dayIdx < 9 ? "0"+((dayIdx++)+1) : ((dayIdx++)+1)),
          content: ""
        }
        
        if ( curIdx < json.length && newArr[i].date === json[curIdx].date ) {
          newArr[i] = json[curIdx];
          curIdx ++;
        } 
      }

      dispatch(setMonthlyDataList(newArr));
    })
  }, [month]);
  

  return (
    <CalendarContainer>
        {
          dataList.map((e, i) => ( <CalendarItem data={e} key={i} 
            isValidDate={ e && e.date !== "" ? true : false } 
            isToday={ !e ? false : ( (e.date === year+"-"+nowMonth+"-"+today ) ? true : false) }
          /> ))
        }
    </CalendarContainer>
  )
}

export default CalendarList;