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

export default (MappView)
// export default connect<OwnProps, StateProps, DispatchProps>({
//   mapStateToProps: (state) => ({
//     locations: state.data.locations,
//     mapCenter: selectors.mapCenter(state)
//   }),
//   component: MappView
// });

// import React from 'react';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import { appConfig } from '../../utils/constants'; //appConfig
// import { UserSession } from 'blockstack'

// // const Map: React.FC = () => {
//     class Map extends React.Component {

//     ryan() {
//           console.log("Map Page Fired")
//           return null;
//     };

//     render (){
//         this.ryan()
//     return (
//         <IonPage>
//             <IonHeader>
//                 <IonToolbar>
//                     <IonTitle>Map Page</IonTitle>
//                 </IonToolbar>
//             </IonHeader>
//             <IonContent className="ion-padding">
//                 <h2>Map</h2>
//             </IonContent>
//         </IonPage>
//     );
// };
//     }

// export default Map;