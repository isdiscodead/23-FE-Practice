import React from 'react'
import { styled } from 'styled-components'

const ItemBox = styled.div`
    border: 1px solid #C4C4C4;
    border-radius: 2px;
    width: 30px;
    height: 30px;
    margin: 5px;
`

function CalendarItem() {
  return (
    <div>
        <ItemBox></ItemBox>
    </div>
  )
}

export default CalendarItem