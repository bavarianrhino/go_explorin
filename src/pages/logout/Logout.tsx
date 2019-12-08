import React from 'react';
import { IonContent, IonButton } from '@ionic/react';

// export const Loading: React.FC = () => (
    export default class Logout extends React.Component {
        handleClick2 = (e: any) => {
            console.log(localStorage.getItem)
            console.log(localStorage.getItem('history'))
        }

        render(){
            return (
                <IonContent>
                    <IonButton shape="round" expand="block" fill="outline" color="tertiary" onClick={e => {e.preventDefault(); this.handleClick2(e); }}>Blockstack Login</IonButton>
                </IonContent>
            )
        }
    }

// export default Loading
