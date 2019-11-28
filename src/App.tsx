import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { withIonLifeCycle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// IonHeader, IonPage, IonToolbar, IonTitle, IonContent,
// import { connect } from 'react-redux';

// Blockstack
import { appConfig } from './utils/constants'; //appConfig
import { UserSession } from 'blockstack'

import Home from './pages/Home';

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

class App extends React.Component {

    state = {
        userSession: new UserSession({ appConfig })

    }
    ionViewWillEnter () {
        console.log('ionViewWillEnter event fired')
        const { userSession } = this.state
        console.log(userSession)

        if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
          const userData = userSession.handlePendingSignIn()
    
          if (!userData) {
            throw new Error('This app requires a username')
          }
          console.log("Need to link this to a route to")
        }
    }

    ionViewDidEnter () {
        console.log('ionViewWillEnter event fired')
        const { userSession } = this.state
        console.log(userSession)

        if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
          const userData = userSession.handlePendingSignIn()
    
          if (!userData) {
            throw new Error('This app requires a username')
          }
          console.log("Need to link this to a route to")
        }
    }

    ionViewWillLeave () {
        console.log('ionViewWillEnter event fired')
        const { userSession } = this.state
        console.log(userSession)

        if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
          const userData = userSession.handlePendingSignIn()
    
          if (!userData) {
            throw new Error('This app requires a username')
          }
          console.log("Need to link this to a route to")
        }
    }

    ionViewDidLeave () {
        console.log('ionViewWillEnter event fired')
        const { userSession } = this.state
        console.log(userSession)

        if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
          const userData = userSession.handlePendingSignIn()
    
          if (!userData) {
            throw new Error('This app requires a username')
          }
          console.log("Need to link this to a route to")
        }
    }

    render() {
        return (
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route path="/home" component={Home} exact={true} />
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        )
    }
}

export default withIonLifeCycle(App);
//   export default connect(null, {})(App);

// const App: React.FC = () => (
//     <IonApp>
//         <IonReactRouter>
//             <IonRouterOutlet>
//                 <Route path="/home" component={Home} exact={true} />
//                 <Route exact path="/" render={() => <Redirect to="/home" />} />
//             </IonRouterOutlet>
//         </IonReactRouter>
//     </IonApp>
// );

