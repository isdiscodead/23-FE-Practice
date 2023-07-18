import React from 'react'
import { styled } from 'styled-components'

import { dailyData } from "./CalendarList";
import { useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { setSelectedDate } from '../../store/selectedDateSlice';
import { setModal } from '../../store/editorModalSlice';

const ItemBox = styled.button`
  border: 1px solid #C4C4C4;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  margin: 15px 0px;
  font-size: 20px;
`

function CalendarItem(props: { data: dailyData, isValidDate: boolean, isToday: boolean }) {

  const dispatch = useDispatch();

  const selectedDate = useSelector((state: RootState) => {
      return state.selectedDate;
  });


  return (
    <div>
        <ItemBox onClick={() => {
            // 해당 날짜로 selectedDate 변경
            dispatch(setSelectedDate({ value : props.data.date }));
            console.log(selectedDate);
            // 모달 열기
            dispatch(setModal(true))
          }} 
          style={ props.isValidDate ? ( props.isToday ? { backgroundColor: "#C4C4C480" } : { backgroundColor: "#C4C4C430" }) : { display: "none" }} 
        >
          { props.data ? props.data.emoji : "" }
        </ItemBox>
    </div>
  )
}

export default CalendarItem