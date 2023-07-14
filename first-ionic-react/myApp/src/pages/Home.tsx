import { IonContent, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonBackButton, IonButtons } from '@ionic/react';
import './Home.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Monthly from '../components/Monthly/Monthly';
import { Daily } from '../components/Daily/Daily';

import { AddBtn } from '../components/Add/AddBtn';
import { AddModal } from '../components/Add/AddModal';

import { useContext } from 'react';
import { MainViewContext } from '../contexts/MainViewContext';

const Home: React.FC = () => {
  const {isMonthly, setIsMonthly} = useContext(MainViewContext);

  return (
    <>
      <IonPage id="main-content">
        <Header />

        <IonContent class='ion-padding'>
          { isMonthly ? <Monthly /> : <Daily /> }

          <AddModal />
          <AddBtn /> 
        </IonContent>

        <Footer />
      </IonPage>
    </>
    
  );
};

export default Home;
