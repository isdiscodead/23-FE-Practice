import React from 'react'
import { IonFooter, IonToolbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react'
import { useContext } from 'react';
import { MainViewContext } from '../../contexts/MainViewContext';



export default function Footer() {
  const {isMonthly, setIsMonthly} = useContext(MainViewContext);

  return (
    <IonFooter>
        <IonToolbar color='secondary' >
            <IonSegment value="month">
                <IonSegmentButton value="month" onClick={ () => { setIsMonthly(true) } }>
                    <IonLabel> 📅 월별로 보기</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="one" onClick={ () => { setIsMonthly(false) }}>
                    <IonLabel>📝 하나씩 보기</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        </IonToolbar>
    </IonFooter>
  )
}
