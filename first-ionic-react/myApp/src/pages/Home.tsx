import { IonContent, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonBackButton, IonButtons } from '@ionic/react';
import './Home.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

const Home: React.FC = () => {
  return (
    <IonPage id="main-content">

      <Menu />

      <Header />

      <IonContent fullscreen>
      </IonContent>

      <Footer />
    </IonPage>
  );
};

export default Home;
