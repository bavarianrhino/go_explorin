import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonFab, IonFabButton, IonIcon, IonButton, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import PropTypes from 'prop-types'
import Loading from '../loading/Loading'
import { UserSession } from 'blockstack';
import { useParams } from 'react-router';
import { useStore } from 'react-redux';
import { appConfig } from '../../utils/constants'; //appConfig
// import { UserSession } from 'blockstack'
// import { Component } from 'react';

// const Login: React.FC = () => {
export default class Login extends React.Component {
    
    state = {
        userSession: new UserSession({ appConfig }),
        loading: false
    }

    static propTypes = {
        userSession: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
      }

      completedSignIn = () => {
        //   debugger
        this.setState({ loading: false})
        return true
    }

    // userPendingSignIn = async () => {
    //     const { userSession } = this.state
    //     this.setState({ loading: true})
        // debugger
    //     try {
    //         await userSession.handlePendingSignIn()
            
    //     } catch(err) {
    //         userSession.redirectToSignIn()
    //     }
    // }

    handleClick2 = async (e: any) => {
        const { userSession } = this.state
        const userData1 = userSession.isUserSignedIn()
        const userData2 = userSession.isSignInPending()
        console.log(userData1, " - Signed In?")
        console.log(userData2, " - Pending Sign In?")
        this.setState({ loading: true})
        // if(userData1){
        //     // this.setState({ loading: false})
        //     return true
        // }
        if((!userData1 && !userData2) || (!userData1 && userData2)) {
            // debugger
            try {
                await this.userPendingSignIn()
            } catch (err) {
                await this.userPendingSignIn()
            }
            // debugger
            if((!userData1 && !userData2) || (!userData1 && userData2)) {
            
                try {
                    await this.userPendingSignIn()
                } catch (err) {
                    await this.userPendingSignIn()
                }
                if(userData1){
                    // debugger
                    this.completedSignIn()
                }
            }
            
        }
        // debugger
            if((!userData1 && !userData2) || (!userData1 && userData2)) {
            
                try {
                    await this.userPendingSignIn()
                } catch (err) {
                    await this.userPendingSignIn()
                }
                if(userData1){
                    // debugger
                    this.completedSignIn()
                }
            }
    }

    userPendingSignIn = async () => {
        const { userSession } = this.state
        const userData1 = userSession.isUserSignedIn()
        const userData2 = userSession.isSignInPending()
        console.log(userData1, " - Signed In?")
        console.log(userData2, " - Pending Sign In?")
        this.setState({ loading: true})
        // debugger
        try {
            await userSession.handlePendingSignIn()
            
        } catch(err) {
            userSession.redirectToSignIn()
        }
    }

    // handleClick2 = (e: { preventDefault: () => void; }) => {
    //     const { userSession } = this.state
    //     e.preventDefault()
    //     userSession.redirectToSignIn()
    //     this.setState({ loading: true })
    //   }
    

    // handleSignIn = (e: { preventDefault: () => void; }) => {
    //     // const  { userSession }  = this.state
    //     e.preventDefault()
    //     // userSession.redirectToSignIn()
    //     this.setState({ loading: true })
    //   }

    //   ionViewWillEnter = async () => {
        // await this.userSignedIn()
    // }

    // redirectSignIn = () => {
    //     const { userSession } = this.state
    //     userSession.redirectToSignIn()
    //     return false
    // }

    // completedSignIn = () => {
    //     this.setState({ loading: false})
    //     return true
    // }

    // userPendingSignIn = async () => {
    //     const { userSession } = this.props
    //     this.setState({ loading: true})
    //     try {
    //         await userSession.handlePendingSignIn()
            
    //     } catch(err) {
    //         userSession.redirectToSignIn()
    //     }
    // }

    // userSignedIn = async () => {
    //     const userSession = this.props
    //     const userData1 = userSession.isUserSignedIn()
    //     const userData2 = userSession.isSignInPending()
    //     console.log(userData1, " - Signed In?")
    //     console.log(userData2, " - Pending Sign In?")
    //     this.setState({ loading: true})
    //     // if(userData1){
    //     //     // this.setState({ loading: false})
    //     //     return true
    //     // }
    //     if((!userData1 && !userData2) || (!userData1 && userData2)) {
            
    //         try {
    //             await this.userPendingSignIn()
    //         } catch (err) {
    //             await this.userPendingSignIn()
    //         }
    //         if((!userData1 && !userData2) || (!userData1 && userData2)) {
            
    //             try {
    //                 await this.userPendingSignIn()
    //             } catch (err) {
    //                 await this.userPendingSignIn()
    //             }
    //             if(userData1){
    //                 debugger
    //                 this.completedSignIn()
    //             }
    //         }
    //     }
    // }

    render() {
        // const { userSession } = this.props
        const { loading } = this.state
        // console.log(onclick.event)
        // const userSession = this.props
        // const bool = userSession.isUserSignedIn()

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {(this.state.userSession.isSignInPending()) ? (this.handleClick2(null)) :
                <IonContent className="ion-padding">
                    <IonFab vertical="center" horizontal="start" slot="fixed">
                        <IonFabButton onClick={e => {e.preventDefault(); this.handleClick2(e); }}>
                            <IonIcon name="add" />
                        </IonFabButton>
                    </IonFab>
                    <IonFab vertical="center" horizontal="center" slot="fixed">
                        <IonFabButton onClick={e => {e.preventDefault(); this.handleClick2(e); }}>
                            <IonIcon name="add" />
                        </IonFabButton>
                    </IonFab>
                    <IonFab vertical="center" horizontal="end" slot="fixed">
                        <IonFabButton onClick={e => {e.preventDefault(); this.handleClick2(e); }}>
                            <IonIcon name="add" />
                        </IonFabButton>
                    </IonFab>
                </IonContent>}
            </IonPage>
        )
    }
}
// export default Login;