import React from 'react'
import { styled } from 'styled-components'

// grid로 변경 필요 
const DayList = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DayListItem = styled.span`
    display: block;
    width: 35px;
    color: #626262;
    margin: 5px;
    font-size: 14px;
    text-transform: uppercase;
`;

const dayListString = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function Day() {

    return (
        <DayList>
            { 
                dayListString.map((e) => {
                    return ( <DayListItem key={e}>{ e }</DayListItem> );
                })
            }
        </DayList>
    );
}

export default React.memo(Day);