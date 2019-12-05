import React from 'react';
import Mapp from './/Mapp';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonPage } from '@ionic/react';
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

        <IonContent class="map-page">
            {/* <Map locations={locations} mapCenter={mapCenter} /> */}
            <Mapp />
        </IonContent>
        </IonPage>
    )};

export default MappView


// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'keyiubdiwebiwebc';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

// export default connect<OwnProps, StateProps, DispatchProps>({
//   mapStateToProps: (state) => ({
//     locations: state.data.locations,
//     mapCenter: selectors.mapCenter(state)
//   }),
//   component: MappView
// });