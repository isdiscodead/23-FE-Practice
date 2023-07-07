import React, { useState } from 'react'
import { styled } from 'styled-components'


const DateEmojiContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1.5px solid gray;
    justify-content: space-between;
    margin-bottom: 10px;
    height: 70px;
`;

const DateContainer = styled.div`
    display: flex;
    flexDirection: column;
`;

const Month = styled.h1`
    color: #626262;
    font-weight: 900;
    font-size: 48px;
    margin-right: 10px;
    align-self: flex-end;
`;

const Year = styled.h2`
    color: gray;
    padding-bottom: 5px;
    align-self: flex-end;
`;

const RepEmoji = styled.h1`
    font-size: 52px;
    margin-right: 10px;
    align-self: flex-end;
`

export default function Dates() {

    const [nowYear, setNowYear] = useState(() => {
        return new Date().getFullYear();
    });
    const [nowMonth, setNowMonth] = useState(() => {
        let month = new Date().getMonth() + 1;
        return month > 9 ? month : "0" + month;
    })
    const [nowDate, setNowDate] = useState(() => {
        return new Date().getDate();
    });

    const [repEmoji, setRepEmoji] = useState("🌼");
        
    return (
        <div>
            <DateEmojiContainer>
                <DateContainer>
                    <Month>
                        { nowMonth }
                    </Month>
                    <Year>
                        { nowYear }
                    </Year>
                </DateContainer>
                <RepEmoji>
                    {repEmoji} 
                </RepEmoji>
            </DateEmojiContainer>
        </div>
    )
}
