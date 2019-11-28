import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import 'Home/Home.css'
type State = {
    username: string | null,
    password: string | null,
}
userSession: new UserSession({ appConfig })

export default class Home extends Component<{},State> {
    signupFormRef: React.Ref<HTMLFormElement>
  
    constructor(props: {}) {
        super(props);
            this.state = {
                username: null,
                password: null
            }

        this.signupFormRef = React.createRef();
    }

    ionViewWillEnter () {
        console.log('ionViewWillEnter event fired')
        // const { userSession } = this.state
        const { state } = this.state
        console.log(userSession)

        if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
            const userData = userSession.handlePendingSignIn()

            if (!userData) {
                throw new Error('This app requires a username')
            }
                console.log("Need to link this to a route to")
        }
    }

  
    onSignup() {}
    render() {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>GoExplorin</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h2>Hello Blockstack!!</h2>
                    <p>The world is your oyster....but more importantly it's a garden...dig it.</p>
                    <p>If you get lost, the{' '}<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">ionic docs</a>{' '}will be your guide.</p>
                    {ryan()}
                </IonContent>
            </IonPage>
        </>
    );
};

export default Home;

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