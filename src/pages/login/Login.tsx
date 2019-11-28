import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Login: React.FC = () => {

    function ryan() {
          console.log("Need to link this to a route to")
          return null;
    };

    return (
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
    );
};

export default Login;