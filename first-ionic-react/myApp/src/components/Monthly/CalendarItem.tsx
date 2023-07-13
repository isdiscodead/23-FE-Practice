import React from 'react'
import { styled } from 'styled-components'

import { dailyData } from "./CalendarList";

const ItemBox = styled.button`
  border: 1px solid #C4C4C4;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  margin: 15px 0px;
  font-size: 20px;
`

function CalendarItem(props: { data: dailyData, isValidDate: boolean, isToday: boolean }) {
  return (
    <div>
        <ItemBox onClick={() => console.log(props.data.date)} 
          style={ props.isValidDate ? ( props.isToday ? { backgroundColor: "#ffffff80" } : { backgroundColor: "#ffffff40" }) : { display: "none" }} >
          { props.data ? props.data.emoji : "" }
        </ItemBox>
    </div>
  )
}

export default CalendarItem