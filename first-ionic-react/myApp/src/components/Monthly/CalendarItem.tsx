import React from 'react'
import { styled } from 'styled-components'

const ItemBox = styled.button`
    border: 1px solid #C4C4C4;
    border-radius: 2px;
    width: 30px;
    height: 30px;
    margin: 5px;
    background: none;
`

function CalendarItem() {
  return (
    <div>
        <ItemBox onClick={() => console.log("clicked") }></ItemBox>
    </div>
  )
}

export default CalendarItem