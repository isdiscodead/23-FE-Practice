import Day from './Day'
import CalendarList from './CalendarList'
import { styled } from 'styled-components'

const CalendarSectionContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px solid gray;
  margin-bottom: 25px;
  padding-bottom: 10px;
  min-width: 320px;
`;


export default function Calendar() {

  return (
    <CalendarSectionContainer>
      <Day/>
      <CalendarList />
    </CalendarSectionContainer>
  )
}
