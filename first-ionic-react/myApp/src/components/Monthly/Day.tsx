import React from 'react'
import { styled } from 'styled-components'

// grid로 변경 필요 
const DayList = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    place-items: center;
    margin-bottom: 5px;
`;

const DayListItem = styled.span`
    display: block;
    width: 33px;
    color: --var(--ion-color-secondary);
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