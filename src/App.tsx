import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { withIonLifeCycle } from '@ionic/react';
// IonHeader, IonPage, IonToolbar, IonTitle, IonContent,

import Login from './pages/login/Login';
import Mapp from './pages/map/Mapp';
import LeaderBoard from './pages/leaderboard/LeaderBoard';
import Loading from './pages/loading/Loading';

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
import { share, map } from 'ionicons/icons';
import { locate } from 'ionicons/icons';
import { close } from 'ionicons/icons';

    // const App: React.FunctionComponent = () => {
    class App extends React.Component {

        state = {
            userSession: new UserSession({ appConfig }),
            loading: true
            // userSession:
            // signedIn: false
        }

    ionViewWillEnter () {
        // this.setState({
            // userSession: new UserSession({ appConfig })
        // })
        // this.getUserSession()
        // this.userSignedIn()
    }

    redirectSignIn = () => {
        const { userSession } = this.state
        userSession.redirectToSignIn()
        return false
    }

    userPendingSignIn = async () => {
        const { userSession } = this.state
        // const userData = await userSession.handlePendingSignIn()
        const data = await userSession.handlePendingSignIn()
        return false
        // this.setState({ loading: false})
    }

    userSignedIn = async () => {
        const { userSession } = this.state
        const userData1 = userSession.isUserSignedIn()
        const userData2 = userSession.isSignInPending()
        console.log(userData1, " - Signed In?")
        console.log(userData2, " - Pending Sign In?")
        if(userData1){
            // this.setState({ loading: false})
            return true
        }
        if(!userData1 && userData2) {
            this.userPendingSignIn()
                // .then((res) => this.setState({ loading: false}))
                // .then((res) => true)
            // if(userData1){
            //     this.setState({ loading: false})
            //     return true
            // }
            return false
        }
        if(!userData1 && !userData2) {
            // this.userPendingSignIn()
            this.redirectSignIn()
            // this.userPendingSignIn()
            return false
        }
        // return false
    }

    // redirectSignIn = () => {
        // const { userSession } = this.state
        // userSession.redirectToSignIn()
        // return false
    // }

    // userPendingSignIn = async () => {
    //     const { userSession } = this.state
    //     const userData1 = userSession.isUserSignedIn()
    //     const userData2 = userSession.isSignInPending()
    //     const userData3 = userSession.getAuthResponseToken()
    //     const userData4 = userSession.generateAndStoreTransitKey()
    //     console.log(userData1, " - Signed In?")
    //     console.log(userData2, " - Pending Sign In?")
    //     console.log(userData3, " - KEY")
    //     console.log(userData4, " - KEY")
    //     // const userData = await userSession.handlePendingSignIn()
    //     const userData = await userSession.handlePendingSignIn()
    //     return false
    //     // return false
    //     // this.setState({ loading: false})
    // }

    // userSignedIn = () => {
    //     const { userSession } = this.state
    //     const userData1 = userSession.isUserSignedIn()
    //     const userData2 = userSession.isSignInPending()
    //     const userData3 = userSession.getAuthResponseToken()
    //     const userData4 = userSession.generateAndStoreTransitKey()
    //     console.log(userData1, " - Signed In?")
    //     console.log(userData2, " - Pending Sign In?")
    //     console.log(userData3, " - KEY")
    //     console.log(userData4, " - KEY")
    //     if(!userData1 && !userData2) {
    //         // this.userPendingSignIn()
    //         // debugger
    //         userSession.redirectToSignIn()
    //         // userSession.redirectToSignInWithAuthRequest()
    //         // this.userPendingSignIn()
    //         return false
    //         // console.log(History)
    //     }
    //     else if(!userData1 && userData2) {
    //         // userSession.redirectToSignIn()
    //         // const userData1 = await this.userPendingSignIn().then(console.log)
    //         // console.log(History)
    //         const { userSession } = this.state
    //     const userData1 = userSession.isUserSignedIn()
    //     const userData2 = userSession.isSignInPending()
    //     const userData3 = userSession.getAuthResponseToken()
    //     const userData4 = userSession.generateAndStoreTransitKey()
    //     console.log(userData1, " - Signed In?")
    //     console.log(userData2, " - Pending Sign In?")
    //     console.log(userData3, " - KEY")
    //     console.log(userData4, " - KEY")
    //     this.userPendingSignIn()
    //         .then((res) => {
    //             return true
    //         })
    //     // debugger
    //         // console.log(userData)
    //         // this.userPendingSignIn()
    //             // .then((res) => this.setState({ loading: false}))
    //             // .then((res) => true)
    //         // return true
    //     }
    //     if(userData1){
    //         // this.setState({ loading: false})
    //         return true
    //     }
    //     // this.setState({ loading: true})
    //     // console.log("XXXXXXXXXXXXXXXX")
    //     return false
    // }

                
        render (){
            // this.userSignedIn()
        return (
            <IonApp>
                {/* {(!this.userSignedIn()) ? <Loading /> : */}
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route path="/login" component={Login} exact={true} />
                            <Route path="/loading" component={Loading} exact={true} />
                            <Route path="/map" component={Mapp} exact={true} />
                            <Route path="/LeaderBoard" component={LeaderBoard} exact={true} />
                            {/* <Route path="/" render={() => <Redirect to="/login" />} exact={true} /> */}
                            <Route path="/" render={() => (this.userSignedIn() ? <Redirect to="/map" /> : <Redirect to="/loading" />)} exact={true} />
                            {/* <Route path="/" render={() => (!this.userSignedIn() ? <Redirect to="/loading" /> : <Redirect to="/map" />)} exact={true} /> */}
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
                {/* } */}
            </IonApp>
        )
    }
    }
// }

  export default connect(null, {setUserSession})(withIonLifeCycle(App));
//   export default withIonLifeCycle(connect(null, {})(App));
// export default withIonLifeCycle(App);

