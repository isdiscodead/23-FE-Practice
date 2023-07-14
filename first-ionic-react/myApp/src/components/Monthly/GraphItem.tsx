import { styled } from 'styled-components'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { monthlyStat } from '../../store/monthlyDataStatSlice';

const GraphItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px 5px;
`;

// 개수에 따라서 길이 달라져야 함
// 색상 랜덤 ?? 이모지 색상 ?? 흠
const GraphItemBar = styled.div`
    background: #EAA9A9;
    height: 20px;
    width: 100%;
    margin-left: 10px;
    border-radius: 0px 5px 5px 0px;
`;

function GraphItem({ idx }: {idx: number}) {

  const stat = useSelector((state: RootState) => {
      return state.monthlyDataStat[idx] ? state.monthlyDataStat[idx] : { emoji: "", cnt: 0 } as monthlyStat;
  });

  return (
    <GraphItemContainer>
        <span>{ stat.emoji }</span>
        <GraphItemBar style={{ width: `${stat.cnt*10}%` }}/>
    </GraphItemContainer>
  )
}

export default GraphItem