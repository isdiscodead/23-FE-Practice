import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

export const AddBtn = () => {
  return (
    <div>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton id="open-modal" onClick={() => {
              // 오늘 날짜로 selectAddDate 설정


            }}>
              <IonIcon icon={ add }></IonIcon>
            </IonFabButton>
          </IonFab>
    </div>
  )
}
