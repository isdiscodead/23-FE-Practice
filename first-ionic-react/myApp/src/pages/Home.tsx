import { IonContent, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonBackButton, IonButtons } from '@ionic/react';
import './Home.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Monthly from '../components/Monthly/Monthly';
import { AddBtn } from '../components/Add/AddBtn';
import { AddModal } from '../components/Add/AddModal';

const Home: React.FC = () => {
  return (
    <>
      <IonPage id="main-content">
        <Header />
        <IonContent class='ion-padding'>
          <Monthly />
          <AddModal />
          <AddBtn /> 
        </IonContent>
        <Footer />
      </IonPage>
    </>
    
  );
};

export default Home;
