import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Menu from './components/Menu/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();


// for context
import { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeContext } from './contexts/ThemeContext';
import { MainViewContext } from './contexts/MainViewContext';
import useDarkMode from './hooks/useDarkMode';
import { store } from './store/store';

const App: React.FC = () => {
  const {isDark, setMode} = useDarkMode(false);
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <Provider store={store} >
      <ThemeContext.Provider value={{ isDark, setMode }}>
      <MainViewContext.Provider value={{ isMonthly, setIsMonthly }}>
        <IonApp>
          <IonReactRouter>
            <Menu />
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </MainViewContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  )
};

export default App;
