import React from 'react'
import Day from './Day'
import CalendarList from './CalendarList'
import { styled } from 'styled-components'

const CalendarSectionContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px solid gray;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export default function Calendar() {
  return (
    <CalendarSectionContainer>
      <Day/>
      <CalendarList year="2023" month="07" />
    </CalendarSectionContainer>
  )
}
