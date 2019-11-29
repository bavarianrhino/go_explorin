import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Map: React.FC = () => {

    // function ryan() {
    //       console.log("Map Page Fired")
    //       return null;
    // };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Map Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Map</h2>
            </IonContent>
        </IonPage>
    );
};

export default Map;