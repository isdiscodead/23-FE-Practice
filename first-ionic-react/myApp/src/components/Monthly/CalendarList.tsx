import React, { useEffect, useState } from 'react'
import CalendarItem from './CalendarItem'
import { styled } from 'styled-components'

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
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear().toString());
  const [month, setMonth] = useState((today.getMonth() < 9 ? "0"+(today.getMonth()+1) : (today.getMonth()+1)).toString());
  
  const [dataList, setDataList] = useState(new Array(42));

  // 기본 값 초기화
  useEffect(() => {
    fetch('../src/data.json')
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

      setDataList([...newArr]);
    })
  }, []);
  
  return (
    <CalendarContainer>
        {
          dataList.map((e, i) => ( <CalendarItem data={e} key={i} 
            isValidDate={ e && e.date !== "" ? true : false } 
            isToday={ !e ? false : ( e.date.substring(8, 10) === today.getDate().toString() ? true : false) }
          /> ))
        }
    </CalendarContainer>
  )
}

export default CalendarList;