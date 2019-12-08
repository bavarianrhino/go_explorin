import React from 'react';
import { Plugins } from '@capacitor/core';
import { IonContent, IonGrid, IonRow, IonCol, withIonLifeCycle } from '@ionic/react';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"; //Source

import Loading from '../loading/Loading'

import './Mapp.css';

import { coordinatesData } from '../../utils/data';

class Mapp extends React.Component {

    state = {
        loadingMap: true,
        viewport: {
            zoom: 13,
            darkMode: 'mapbox://styles/mapbox/dark-v10',
            lightMode: 'mapbox://styles/mapbox/light-v10',
        },
        coordsCurrentLocation: {
            latitude: 0,
            longitude: 0
        },
        watchId : '0',
        coordinatesTotalArea: [ [ [-170, 80], [-100, 85], [-30, 85], [10, 85], [ 100, 85 ], [ 170, 80], [ 175, 40], [175, 5], [175, -40], [170, -80], [100, -85], [10, -85], [-30, -85], [-100, -85], [-170, -80], [-175, -40], [-175, -5], [-175, 40], [-170, 79] ], [ [ -84.407, 34.171 ], [ -84.405, 34.171 ], [ -84.405, 34.169 ], [ -84.407, 34.169 ] ] ] //-84.406, 34.170
    }

    ionViewWillEnter() {
        this.ionViewWillEnterLog()
        this.getCurrentPosition()
        this.lookAtPosition()
    }

    ionViewDidEnter() {
        this.ionViewDidEnterLog()
    }

    ionViewWillLeave() {
        this.ionViewWillLeaveLog()
        this.clearWatchPosition()
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

    toggleLoadingState = () => {
        this.setState({
            ...this.state,
                loadingMap: false
        })
        // console.log('Loading Map..? - ', this.state.loadingMap)
    }

    getCurrentPosition = async () => {
        try {
            const locationInfo = await Plugins.Geolocation.getCurrentPosition()
            this.setState({
                ...this.state,
                coordsCurrentLocation: {
                    latitude: Math.round(locationInfo.coords.latitude*1000)/1000,
                    longitude: Math.round(locationInfo.coords.longitude*1000)/1000
                }
            })
            console.log('Got Current Position - ', `Lat - ${locationInfo.coords.latitude}.  Long - ${locationInfo.coords.longitude}`);
            console.log('Got Current Position - ', locationInfo.coords.longitude + "___", locationInfo.coords.latitude, );
            this.toggleLoadingState()
            return locationInfo
        } catch(error) {
            console.error('Error Occurred In Getting Current Position Function. Error code: ' + error.code);
        }
    }

    clearWatchPosition = async () => {
        const id = this.state.watchId
        const watchId = await Plugins.Geolocation.clearWatch({id: id})
        console.log("Cleared Watch Process - ", watchId)
    }
    
    lookAtPosition() {
        try {
            // eslint-disable-next-line
            const id = Plugins.Geolocation.watchPosition({
                enableHighAccuracy: true,
                maximumAge: 10000,
                requireAltitude: false,
                timeout: 600000
            }, (position, error) => {
                console.log("Currently Watching Location - ", position.coords)
                console.log('Got Watch Data ID - ', id);
                this.setState({
                    ...this.state,
                    coordsCurrentLocation: {
                        latitude: Math.round(position.coords.latitude*1000)/1000,
                        longitude: Math.round(position.coords.longitude*1000)/1000
                    },
                    watchId: id
                })
                this.toggleLoadingState()
            })
        } catch(error) {
            console.error('Error Occurred In Watching Location. Error code: ' + error.code);
        }
    }

    getPreviousCoords = async () => {
        try {
            const worldPolygram = await coordinatesData
            console.log(worldPolygram)
            this.setState({
                coordinatesTotalArea: worldPolygram
            })
        } catch(error) {
            console.error('Error occurred. Error code: ' + error.code);
        }
        return console.log(this.state)
    }

    setMapCenter = () => {
        const { latitude, longitude } = this.state.coordsCurrentLocation
        return [ longitude, latitude ] as [number, number];
    }

    render () {
        const { viewport, loadingMap, coordinatesTotalArea } = this.state
        const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoicnlhbnJpZXNlbmJlcmdlciIsImEiOiJjazNkNGhwYW4wdXJ1M2RudjJycHFxbjhuIn0.zv807JC8_CQB1XnVGTaUqQ' });
        const polygonpaint = {'fill-opacity': 0.5, 'fill-color': '#f32e5a' }
        const mapStyle = { overflow: "visible", height: "87vh" };
        return (
            <IonContent>
                {(loadingMap) ? 
                    <IonGrid>
                        <IonRow class="ion-justify-content-center" style={{ 'margin': '40% auto' }}>
                            <IonCol size='auto'>
                                <Loading />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                :
                <Map
                    style={viewport.darkMode}
                    containerStyle={mapStyle}
                    zoom={[viewport.zoom]}
                    center={this.setMapCenter()}
                    // containerStyle={{ height: '100%', width: '100%' }}
                    // onStyleLoad={this.onStyleLoad}
                    // className='map-div'
                    >
                    <Layer type="fill" paint={polygonpaint} > 
                        <Feature coordinates={coordinatesTotalArea}/>
                    </Layer>
                </Map>
                }
            </IonContent>
        )
    }
}
export default withIonLifeCycle(Mapp);