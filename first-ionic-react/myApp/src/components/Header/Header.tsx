import React from 'react'
import { styled } from 'styled-components'

import { IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

const StyledHeader = styled.div`
    background: '#F9F5F1';
    font-size: 32px;
    display: flex;
    justify-contents: center;
    height: 60px;
`;

export default function Header() {
  return (
    <StyledHeader>
        <IonToolbar color={'secondary'}>
            <IonButtons slot="start">
                <IonMenuButton auto-hide="false"></IonMenuButton>
            </IonButtons>
            <IonTitle>🥳 DayMoji</IonTitle>
        </IonToolbar>
    </StyledHeader>
  )
}
