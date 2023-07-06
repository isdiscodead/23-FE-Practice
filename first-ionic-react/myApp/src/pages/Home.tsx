import { IonContent, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonBackButton, IonButtons } from '@ionic/react';
import './Home.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Monthly from '../components/Monthly/Monthly';

const Home: React.FC = () => {
  return (
    <>
      <IonPage id="main-content">
        <Header />
        <IonContent class='ion-padding'>
          <Monthly />
        </IonContent>
        <Footer />
      </IonPage>
    </>
    
  );
};

export default Home;
