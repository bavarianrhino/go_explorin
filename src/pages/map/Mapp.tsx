import React from 'react';
import { Plugins } from '@capacitor/core';
import { IonContent, withIonLifeCycle } from '@ionic/react';
// import ReactMapboxGL, { Source, Layer } from '@urbica/react-map-gl';
import ReactMapboxGl, { Layer, Source, Feature } from "react-mapbox-gl";

// import MapGL from 'react-mapbox-gl';
// import Immutable from 'immutable';
// const ChoroplethOverlay = require('./choropleth-overlay');
// import 'mapbox-gl/dist/mapbox-gl.css';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';

// import { GOOGMAPKEY } from '../../utils/data';
// import { JSON_DATA } from '../../utils/data';
import { AllShapesMultiPolygonCoords2 } from '../../utils/data';
// import { MAPBOXKEY } from '../../utils/data';
// import { Location } from '../models/Location';

// interface MapProps {
//   locations: Location[]
//   mapCenter: Location
// }
// const Map: React.FC<MapProps> = ({ mapCenter, locations }) => {
    // const MapGL = MapGL({ accessToken: MAPBOXKEY });});
    const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoicnlhbnJpZXNlbmJlcmdlciIsImEiOiJjazNkNGhwYW4wdXJ1M2RudjJycHFxbjhuIn0.zv807JC8_CQB1XnVGTaUqQ' });
class Mapp extends React.Component {

    state = {
        viewport: {
            width: "100vw",
            height: '100vh',
            latitude: 0,
            longitude: 0,
            zoom: 15
        },
        coords: {
            latitude: 0,
            longitude: 0
        },
        watchId : "somestring",
        watchId2 : "somestring",
        polyPoints1: null,
        polyPoints2: null,
        coordinates: [ [ [ 7.296981811523438, 47.00203150133958 ], [ 7.282905578613281, 47.07643507807681 ], [ 7.15381622314453, 47.029184449527136 ], [ 7.129783630371094, 46.98095504684829 ], [ 7.142486572265625, 46.920489809659 ], [ 7.231407165527343, 46.90993655080745 ], [ 7.265396118164062, 46.95893298684206 ], [ 7.3333740234375, 46.9835315038091 ], [ 7.296981811523438, 47.00203150133958 ] ], [ [ 7.170982360839843, 47.003202171774475 ], [ 7.209, 47.016 ], [ 7.217674255371093, 46.99617776437492 ], [ 7.1795654296875, 46.97439623248324 ], [ 7.170982360839843, 47.003202171774475 ] ] ]
    }

    ionViewWillEnter() {
        this.ionViewWillEnterLog()
        this.getPosition()
        this.lookAtPosition()
        this.getPreviousCoords()
        // this.lookAtPosition2()
        // this.nonCapacitorGetPosition()
    }

    ionViewWillLeave() {
        this.ionViewWillLeaveLog()
    }

    ionViewDidEnter() {
        this.ionViewDidEnterLog()
    }

    ionViewDidLeave() {
        this.ionViewDidLeaveLog()
    }

    ionViewWillEnterLog = () => { console.log('xxxxxxxxxxionViewWillEnterLogxxxxxxxxxxxx')}
    ionViewWillLeaveLog = () => { console.log('xxxxxxxxxxionViewWillLeaveLogxxxxxxxxxxxx')}
    ionViewDidEnterLog = () => { console.log('xxxxxxxxxxionViewDidEnterLogxxxxxxxxxxxx')}
    ionViewDidLeaveLog = () => { console.log('xxxxxxxxxxionViewDidLeaveLogxxxxxxxxxxxx')}
    
    async requestPermissions() {
        // const permResult = await Plugins.Geolocation.requestPermissions();
    }
    
    async getPosition() {
        try {
            const coordinates = await Plugins.Geolocation.getCurrentPosition()
            // this.setState({
            //     ...this.state,
            //     coords: {
            //         latitude: coordinates.coords.latitude,
            //         longitude: coordinates.coords.longitude
            //     }
            // })
            console.log('Current', coordinates);
        } catch(error) {
            console.error('Error occurred. Error code: ' + error.code);
        }
    }

    nonCapacitorGetPosition = async () => {
        try {
            const name = await navigator.geolocation.getCurrentPosition(position => {
            }, error => {
                console.error('Error occurred. Error code: ' + error.code);
            }, {
                timeout: 1000,
                maximumAge: 10000,
                enableHighAccuracy: true
            })
        } catch (error) {
            console.error('Error occurred. Error code: ' + error.code);
        }
    }

    // //stop watching after 10 seconds
        // setTimeout(() => {
        //   navigator.geolocation.clearWatch(id)
        // }, 10 * 1000)
    
    lookAtPosition() {
        try {
            this.state.watchId = Plugins.Geolocation.watchPosition({
                enableHighAccuracy: false,
                maximumAge: 10000,
                requireAltitude: false,
                timeout: 500000
            }, (position, error) => {
                console.log("watchLocation1", position.coords)
            })
                console.log('Got watch', this.state.watchId);
        } catch(error) {
            console.error('Error occurred. Error code: ' + error.code);
        }
    }
          
    lookAtPosition2 = () => {
        try {
            this.state.watchId2 = Plugins.Geolocation.watchPosition({
                enableHighAccuracy: false,
                maximumAge: 10000,
                requireAltitude: false,
                timeout: Infinity
            }, (position, error) => {
                console.log("watchLocation2", position.coords)
            })
            console.log('Got watch', this.state.watchId);
        } catch(error) {
            console.error('Error occurred. Error code: ' + error.code);
        }
    }

    getPreviousCoords = async () => {
        try {
            const polyPoints11 = await AllShapesMultiPolygonCoords2
            const polyPoints22  = await AllShapesMultiPolygonCoords2
            console.log(polyPoints11)
            console.log(polyPoints22)
            this.setState({
                polyPoints1: {polyPoints11},
                polyPoints2: polyPoints22,
                coordinates: polyPoints22
            })
        } catch(error) {
            console.error('Error occurred. Error code: ' + error.code);
        }
        return console.log(this.state)
    }

    render () {
        // const viewport = this.state.viewport
        const multpolypaint = {'fill-opacity': 0.3, 'fill-color': '#f32e5a' }
        return (
            <IonContent>
                <Map
                    style='mapbox://styles/mapbox/light-v9'
                    zoom={[8]}
                    containerStyle={{ height: '100%', width: '100%' }}
                >
                    <Layer type="fill" paint={multpolypaint} > 
                        <Feature coordinates={this.state.coordinates}/>
                    </Layer>
                </Map>
            </IonContent>
        )
    }
}
export default withIonLifeCycle(Mapp);