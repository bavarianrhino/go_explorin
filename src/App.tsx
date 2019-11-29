import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { withIonLifeCycle } from '@ionic/react';
// IonHeader, IonPage, IonToolbar, IonTitle, IonContent,
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Map from './pages/map/Map';

// Blockstack
import { appConfig } from './utils/constants'; //appConfig
import { UserSession } from 'blockstack'
import { connect } from 'react-redux';


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

    // const App: React.FunctionComponent = () => {
    class App extends React.Component {
        // const isAuthed = true;
        render (){
        return (
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route path="/home" component={Home} exact={true} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        )
    }
    }
// }

  export default connect(null, {})(App);
//   export default withIonLifeCycle(connect(null, {})(App));
// export default withIonLifeCycle(App);

