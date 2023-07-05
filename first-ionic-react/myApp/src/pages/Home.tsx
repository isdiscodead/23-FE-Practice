import { IonContent, IonPage, IonTitle, IonToolbar, IonButtons, IonHeader, IonMenuButton } from '@ionic/react';
import './Home.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
      </IonContent>

      <Footer />
    </IonPage>
  );
};

export default Home;
