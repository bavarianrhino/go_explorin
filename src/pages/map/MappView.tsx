import React from 'react';
import Mapp from './Mapp';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonPage } from '@ionic/react'; //IonContent,
// import { Location } from '../models/Location';
// import { connect } from '../data/connect';
// import * as selectors from '../data/selectors';
// import './MapView.scss';

// interface OwnProps { }
// interface StateProps {
//   locations: Location[];
//   mapCenter: Location;
// }
// interface DispatchProps { }
// interface MapViewProps extends OwnProps, StateProps, DispatchProps { };
// const MappView: React.FC<MapViewProps> = ({ locations, mapCenter }) => {

const MappView: React.FC = () => {
    return (
        <IonPage id="map-view">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Map</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* <IonContent class="map-page"> */}
                {/* <Map locations={locations} mapCenter={mapCenter} /> */}
                <Mapp />
            {/* </IonContent> */}
        </IonPage>
    )};

export default MappView