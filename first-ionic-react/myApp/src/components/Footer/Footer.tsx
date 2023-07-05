import React from 'react'
import { IonFooter, IonToolbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react'

export default function Footer() {
  return (
    <IonFooter>
        <IonToolbar color='secondary' >
            <IonSegment value="month">
                <IonSegmentButton value="month">
                    <IonLabel> 📅 월별로 보기</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="one">
                    <IonLabel>📝 하나씩 보기</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        </IonToolbar>
    </IonFooter>
  )
}
