import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

// 모달 여는 함수


export const AddBtn = () => {
  return (
    <div>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton id="open-modal">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
    </div>
  )
}
