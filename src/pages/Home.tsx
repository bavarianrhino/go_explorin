import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
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
            </IonContent>
        </IonPage>
    );
};

export default Home;
