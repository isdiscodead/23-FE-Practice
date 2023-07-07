import React from 'react'
import CalendarItem from './CalendarItem'
import { styled } from 'styled-components'

// 그리드로 변경 필요
const CalendarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

function CalendarList() {
  return (
    <CalendarContainer>
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
    </CalendarContainer>
  )
}

export default CalendarList