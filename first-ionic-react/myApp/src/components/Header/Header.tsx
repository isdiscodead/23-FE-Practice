import React from 'react'
import { styled } from 'styled-components'

import { IonTitle, IonToolbar, IonButtons, IonMenuButton, IonMenu, IonContent } from '@ionic/react';

const StyledHeader = styled.div`

`;

export default function Header() {
  return (
    <div style={{ width: "100%" }}>
      <StyledHeader>
        <IonToolbar color={'secondary'}>
            <IonButtons slot="start">
                <IonMenuButton auto-hide="false"></IonMenuButton>
            </IonButtons>
            <IonTitle>🥳 DayMoji</IonTitle>
        </IonToolbar>
      </StyledHeader>
    </div>
  )
}
