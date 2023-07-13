import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components'
import { RootState } from '../../store/store';
import { incMonth, decMonth } from '../../store/dateSlice';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';

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
    color: --var(--ion-color-secondary-contrast);
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

const ArrowBtn = styled.button`
    background-color: #8888;
    border-radius: 5px;
    margin-left: 5px;
    margin-top: 18px;
`;

export default function Dates() {

    const dispatch = useDispatch();

    const { today, month, year } = useSelector((state: RootState) => {
        return state.date;
    });

    const [repEmoji, setRepEmoji] = useState("🌼");
        
    return (
        <div>
            <DateEmojiContainer>
                <DateContainer>
                    <Month>
                        { month }
                    </Month>
                    <Year>
                        { year }
                    </Year>

                    <div style={{ marginLeft: 20, marginBottom: '-10' }}>
                        <ArrowBtn onClick={ () => dispatch(decMonth(1)) }>
                            <IonIcon icon={ chevronBackOutline } size="large" color="primary" />
                        </ArrowBtn>
                        <ArrowBtn onClick={ () =>  dispatch(incMonth(1)) }>
                            <IonIcon icon={ chevronForwardOutline } size="large" color="primary" />
                        </ArrowBtn>
                    </div>
                </DateContainer>
                <RepEmoji>
                    { repEmoji } 
                </RepEmoji>
            </DateEmojiContainer>
        </div>
    )
}

