import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { appConfig } from '../../utils/constants'; //appConfig
import { UserSession } from 'blockstack'

// const Map: React.FC = () => {
    class Map extends React.Component {

        // state = {
        //     userSession: new UserSession({ appConfig }),
        //     signedIn: false
        // }


    ryan() {
          console.log("Map Page Fired")
        //   console.log(localStorage)
        //   console.log(localStorage.getItem('blockstack-session'))
        //   const data = this.state.userSession.loadUserData()
        //   console.log(data)
          return null;
    };

    render (){
        this.ryan()
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
    }

export default Map;