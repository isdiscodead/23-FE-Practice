import { useRef, useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

import '../../pages/Home.css';
import styled from 'styled-components';
import { IonModal, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonList,
    IonItem, IonTextarea, IonText} from '@ionic/react'

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import EmojiPicker from 'emoji-picker-react';
import { Theme } from 'emoji-picker-react';

const TodayEmoji = styled.span`
    font-size: 32px;
    vertical-align: center;
`


export const AddModal = () => {

    const {isDark, setMode} = useContext(ThemeContext);
    const [input, setInput] = useState("");
    const [emoji, setEmoji] = useState("");
    
    const selectedDate = useSelector((state: RootState) => {
        return state.selectedDate;
      });

    const ModalContainer = styled.div`
        background-color: ${isDark ? "#626262" : "#fff"};
        flex-direction: column;
        display: flex;
        padding: 20px;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    `;


    const modal = useRef<HTMLIonModalElement>(null);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <IonModal id="example-modal" ref={modal} trigger="open-modal">
            <IonContent>
                <IonToolbar>
                    <IonTitle>기록하기 : { selectedDate.value }</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => dismiss()}>
                            저장
                        </IonButton>
                        <IonButton onClick={() => dismiss()}>
                            취소
                        </IonButton>
                    
                    </IonButtons>
                </IonToolbar>

                <ModalContainer>
                    <IonItem>
                        <EmojiPicker onEmojiClick={(emoji, event)=>{
                            setEmoji(emoji.emoji);
                        }} 
                        width={500} height={350} theme={ isDark ? Theme.DARK : Theme.LIGHT } 
                        />
                    </IonItem>
                    <IonItem>
                        <TodayEmoji>{ emoji }</TodayEmoji>
                        <IonTextarea 
                            value={input}
                            onIonChange={(e) => {
                                setInput(e.target.value!);
                            }}
                            autofocus={true} placeholder='짧은 일기를 입력하세요.' 
                        />
                    </IonItem>
                </ModalContainer>
            </IonContent>
        </IonModal>
  )
}
