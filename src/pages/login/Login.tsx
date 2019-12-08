import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react'; //, IonCard, IonFab, IonFabButton, IonIcon, IonButton, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave,
import PropTypes from 'prop-types'
import Loading from '../loading/Loading'
import { UserSession } from 'blockstack';
// import { useParams } from 'react-router';
// import { useStore } from 'react-redux';
import { appConfig } from '../../utils/constants'; //appConfig
import { BlockstackButton } from 'react-blockstack-button';


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

    handleClick2 = async (e: any) => {
        const { userSession } = this.state
        const userData1 = userSession.isUserSignedIn()
        const userData2 = userSession.isSignInPending()
        console.log(userData1, " - Signed In?")
        console.log(userData2, " - Pending Sign In?")
        this.setState({ loading: true})
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
            this.setState({ loading: false})
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

    render() {
        const { loading } = this.state
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow class="ion-justify-content-center" style={{ 'margin': '40% auto' }}>
                            <IonCol size='auto'>
                                {(loading) ? <Loading /> :
                                    (this.state.userSession.isSignInPending()) ? (this.handleClick2(null)) :
                                        <BlockstackButton onClick={e => {this.handleClick2(e)}} />
                                }
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        )
    }
}
/* <IonButton shape="round" expand="block" fill="outline" color="tertiary" onClick={e => {e.preventDefault(); this.handleClick2(e); }}>Blockstack Login</IonButton>
export default Login;
<IonFab vertical="center" horizontal="end" slot="fixed">
<IonFabButton onClick={e => {e.preventDefault(); this.handleClick2(e); }}>
<IonIcon name="add" />
</IonFabButton>
</IonFab> */