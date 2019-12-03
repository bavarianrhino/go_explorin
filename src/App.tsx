import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { withIonLifeCycle } from '@ionic/react';
// IonHeader, IonPage, IonToolbar, IonTitle, IonContent,

import Login from './pages/login/Login';
import Mapp from './pages/map/Mapp';
import LeaderBoard from './pages/leaderboard/LeaderBoard';
import Logout from './pages/login/Login';

// Blockstack
import { appConfig } from './utils/constants'; //appConfig
import { UserSession } from 'blockstack'
import { connect } from 'react-redux';
import { setUserSession } from './actions/userActions';


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
import { share } from 'ionicons/icons';
import { locate } from 'ionicons/icons';
import { close } from 'ionicons/icons';

    // const App: React.FunctionComponent = () => {
    class App extends React.Component {

        state = {
            userSession: new UserSession({ appConfig }),
            user: {}
        }

    ionViewWillEnter () {
        // const userSession = new UserSession({ appConfig })
        // this.getUserSession()
        // this.userSignedIn()
    }

    // userSignedIn = async () => {
    //     // const userSession = new UserSession({ appConfig })
    //     const userData = this.state.userSession.isUserSignedIn()
    //     console.log(userData)
    //     if(!userData) {
    //         const newuserData = await this.state.userSession.handlePendingSignIn()
    //         console.log(newuserData)
    //         // this.setState({ userSession: newuserData })
    //         return true
    //     } else {
    //         console.log(userData)
    //         // this.setState({ userSession: userData })
    //         return true
    //     }
    //     return null
    // }

    // userSignedIn = () => {
    //     const userData = this.state.userSession.isUserSignedIn()
    //     console.log(userData)
    //     if(!userData) {
    //         const newuserData = this.state.userSession.redirectToSignIn()
    //         console.log(newuserData)
    //         this.setState({ userSession: newuserData })
    //     } else {
    //         console.log(userData)
    //         this.setState({ userSession: userData })
    //     }
    //     return null
    // }

    userSignedIn = () => {
        const userData1 = this.state.userSession.isUserSignedIn()
        const userData2 = this.state.userSession.isSignInPending()
        console.log(userData1)
        console.log(userData2)
        if(!userData1 && !userData2) {
            const user = this.state.userSession.redirectToSignIn()
            this.setState({ user: user})
            debugger
            // const user = this.state.userSession.loadUserData()
            // this.setState({ user: user})
            return true
                // if(user) {

                // }
            // return await this.state.userSession.handlePendingSignIn()
        } else {
            // this.state.userSession.redirectToSignIn()
            const user = this.state.userSession.loadUserData()
            // debugger
            this.setState({ user: user})
            return true
        }
        //     console.log(newuserData)
        //     this.setState({ userSession: newuserData })
        // } else {
        //     let newuserData = this.state.userSession.handlePendingSignIn()
        //     console.log(newuserData)
        //     this.setState({ userSession: newuserData })
        // }
        // const user = this.state.userSession.loadUserData()
        // console.log(user)
        return null
    }
                
        render (){
        return (
            <IonApp>
                {this.userSignedIn()}
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route path="/login" component={Login} exact={true} />
                            <Route path="/map" component={Mapp} exact={true} />
                            <Route path="/LeaderBoard" component={LeaderBoard} exact={true} />
                            <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
                            {/* <Route path="/" render={() => (this.userSignedIn() ? <Redirect to="/map" /> : <Redirect to="/login" />)} exact={true} /> */}
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="tab1" href="/login">
                                <IonIcon icon={share} />
                                <IonLabel>Login</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="tab2" href="/map">
                                <IonIcon icon={locate} />
                                <IonLabel>Map</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="tab3" href="/logout">
                                <IonIcon icon={close} />
                                <IonLabel>Logout</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
            </IonApp>
        )
    }
    }
// }

  export default connect(null, {setUserSession})(withIonLifeCycle(App));
//   export default withIonLifeCycle(connect(null, {})(App));
// export default withIonLifeCycle(App);

