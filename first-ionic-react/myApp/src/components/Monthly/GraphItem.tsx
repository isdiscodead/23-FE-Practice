import React from 'react'
import { styled } from 'styled-components'

const GraphItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px;
`;

// 개수에 따라서 길이 달라져야 함
// 색상 랜덤 ?? 이모지 색상 ?? 흠
const GraphItemBar = styled.div`
    background: #EAA9A9;
    height: 20px;
    width: 60%;
    margin-left: 10px;
    border-radius: 0px 5px 5px 0px;
`;

function GraphItem() {
  return (
    <GraphItemContainer>
        <span>🌼</span>
        <GraphItemBar />
    </GraphItemContainer>
  )
}

export default GraphItem