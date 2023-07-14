import styled from "styled-components"

const MonthSpan = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

const YearSpan = styled.span`
  font-size: 18px;
  padding-left: 5px;
`;

const MonthDivderContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border-bottom: solid 1px gray;
`;

export const MonthDivder = ({ month, year }: { month: string, year: string }) => {
  return (
    <MonthDivderContainer>
      <MonthSpan>
        { month }
      </MonthSpan>
      <YearSpan>
        { year }
      </YearSpan>
    </MonthDivderContainer>
  )
}
