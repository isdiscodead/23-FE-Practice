import styled from 'styled-components'
import { dailyData } from '../Monthly/CalendarList';

const DailyItemContainer = styled.button`
  display: flex;
  justify-content: space-between;
  width: 98%;
  padding: 20px;
  align-items: center;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 10px;
`;

const ThumbEmoji = styled.span`
  font-size: 24px;
  text-align: center;
  vertical-align: center;
  background: #88888830;
  padding: 5px 10px;
  border-radius: 50px;
  margin-right: 20px;
`

const DailyItemContent = styled.span`
  font-size: 20px;
`;

const DailyItemDate = styled.span`
  font-size: 16px;
`;


export const DailyItemCard = ({ item }: { item: dailyData}) => {
  return (
    <DailyItemContainer>
      <ThumbEmoji>{item.emoji}</ThumbEmoji>
      <DailyItemContent>{item.content}</DailyItemContent>
      <DailyItemDate>{item.date}</DailyItemDate>
   </DailyItemContainer>
  )
}
