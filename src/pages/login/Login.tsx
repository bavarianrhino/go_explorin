import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';

import { appConfig } from '../../utils/constants'; //appConfig
import { UserSession } from 'blockstack'

const Login: React.FC = () => {

    // useIonViewWillEnter(() => {
    //     console.log('ionViewWillEnter event fired')
    //     // const { userSession } = this.state
    //     // const { state } = this.state
    //     console.log(UserSession)
    //     console.log(appConfig)
    // })

    // function handleSignIn () {
        // const { userSession } = this.state
        // const userSession = new UserSession({ appConfig })
        // console.log("handlesignin butoton")
        // userSession.redirectToSignIn()
    // }

    // function handleDeviceInfo () async{
    // const handleDeviceInfo = async function () {
        // const { Device } = Plugin;

        // return await Device.getInfo();
        // const info = await Device.getInfo();
        // console.log(info);
    // }

        // if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
        //     const userData = userSession.handlePendingSignIn()

        //     if (!userData) {
        //         throw new Error('This app requires a username')
        //     }
        //         console.log("Need to link this to a route to")
        // }

    // function ryan() {
    //     console.log("Login Page Fired")
    //     return null;
    // };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login With Blockstack</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <button>Login</button>
                {/* {ryan()} */}
            </IonContent>
        </IonPage>
    );
};

export default Login;