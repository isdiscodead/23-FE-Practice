import React from 'react'
import { styled } from 'styled-components'

import { dailyData } from "./CalendarList";

const ItemBox = styled.button`
  border: 1px solid #C4C4C4;
  border-radius: 2px;
  width: 30px;
  height: 30px;
  margin: 5px;
`

function CalendarItem(props: { data: dailyData, isValidDate: boolean, isToday: boolean }) {
  return (
    <div>
        <ItemBox onClick={() => console.log(props.data.date)} 
          style={ props.isValidDate ? ( props.isToday ? { backgroundColor: "#fff" } : {} ) : { display: "none" }} >
          { props.data ? props.data.emoji : "" }
        </ItemBox>
    </div>
  )
}

export default CalendarItem