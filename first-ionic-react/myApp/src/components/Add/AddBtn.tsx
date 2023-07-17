import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const AddBtn = () => {
  const selectedDate = useSelector((state: RootState) => {
    return state.selectedDate;
  });

  return (
    <div>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton id="open-modal" onClick={() => {
                // 오늘 날짜로 selectAddDate 설정
                console.log(selectedDate);
              }}>
              <IonIcon icon={ add }></IonIcon>
            </IonFabButton>
          </IonFab>
    </div>
  )
}
