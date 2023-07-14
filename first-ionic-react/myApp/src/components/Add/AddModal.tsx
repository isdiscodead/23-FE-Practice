import { useRef, useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

import styled from 'styled-components';
import { IonModal, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonList,
    IonItem, IonTextarea, IonText} from '@ionic/react'
import '../../theme/modal.css';

import EmojiPicker from 'emoji-picker-react';
import { Theme } from 'emoji-picker-react';

export const AddModal = () => {

    const {isDark, setMode} = useContext(ThemeContext);

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
                    <IonTitle>기록하기</IonTitle>
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
                        <EmojiPicker onEmojiClick={(emoji, event)=>{}} width={500} height={350} theme={Theme.DARK} />
                    </IonItem>
                    <IonItem>
                        <IonText>🌼</IonText>
                        <IonTextarea placeholder='짧은 일기를 입력하세요.' />
                    </IonItem>
                </ModalContainer>
            </IonContent>
        </IonModal>
  )
}
