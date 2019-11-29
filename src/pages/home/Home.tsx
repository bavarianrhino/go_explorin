import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab, IonFabButton, IonIcon, withIonLifeCycle } from '@ionic/react';
import { add } from 'ionicons/icons'

import { appConfig } from '../../utils/constants'; //appConfig
import { UserSession } from 'blockstack'

import { connect } from 'react-redux';

import { Plugins } from '@capacitor/core';

// import 'Home.css'

const Home: React.FC<RouteComponentProps> = (props) => {
    // signupFormRef: React.Ref<HTMLFormElement>
  
    // constructor(props: {}) {
    //     super(props);
    //         this.state = {
    //             username: null,
    //             password: null
            // }

    //     this.signupFormRef = React.createRef();
    // }


    // state = {
        // userSession: new UserSession({ appConfig })
    // }

    // ionViewWillEnter = async () => {
    //     console.log('Home Page Fired')
    //     console.log(UserSession, "Before Sign In")
    //     console.log(appConfig, "Before Sign In")

    //     const { userSession } = this.state
        
    //     if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
    //         const userData = await userSession.handlePendingSignIn()
    //         console.log(userData)
    //     }
    // }

    function handleSignIn () {
        // const { userSession } = this.state
        const userSession = new UserSession({ appConfig })
        console.log(userSession)
        userSession.redirectToSignIn()
    }

    // function handleDeviceInfo () async{
    const handleDeviceInfo = async function () {
        const { Device } = Plugins;

        // return await Device.getInfo();
        const info = await Device.getInfo();
        console.log(info);
    }

    // ryan() {retun <button></button>}

    // render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                        <IonFabButton onClick={handleDeviceInfo}>
                            <IonIcon icon={add} />
                        </IonFabButton>
                    </IonFab>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton onClick={handleSignIn}>
                            <IonIcon icon={add} />
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        )
    }
// }

export default Home;
// export default withIonLifeCycle(React.forwardRef(null, {})(Home));
{/* <IonFabButton onClick={() => props.history.push('/login')}></IonFabButton> */}

// class App extends React.Component {

    // state = {
    //     userSession: new UserSession({ appConfig })
    // }

    // ionViewWillEnter () {
    //     console.log('ionViewWillEnter event fired')
    //     const { userSession } = this.state
    //     console.log(userSession)

    //     if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
    //       const userData = userSession.handlePendingSignIn()
    
    //       if (!userData) {
    //         throw new Error('This app requires a username')
    //       }
    //       console.log("Need to link this to a route to")
    //     }
    // }

    // ionViewDidEnter () {
    // ionViewWillLeave () {
    // ionViewDidLeave () {
    
    // render() {
        // return (