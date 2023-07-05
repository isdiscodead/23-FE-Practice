import { IonContent, IonPage, IonTitle, IonToolbar, IonButtons, IonHeader, IonMenuButton } from '@ionic/react';
import './Home.css';
import Header from '../components/Header/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
          <Header />

      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Home;
