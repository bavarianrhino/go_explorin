import React from 'react';
import { Plugins } from '@capacitor/core';
import { IonContent, IonGrid, IonRow, IonCol, withIonLifeCycle } from '@ionic/react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"; //Source
import Loading from '../loading/Loading'
import './Mapp.css';
import { coordinatesData } from '../../utils/data';

//////////// GEO COORDS FOG LOGIC //////////////

// const PI = 3.14159265;
// const TWOPI = 2*PI;
// function isCoordinateInsidePitch(latitude, longitude, latArray, longArray, l) {       
//         let angle=0;
//         let p1Lat;
//         let p1Long;
//         let p2Lat;
//         let p2Long;
//         let n = l

//         for (let i = 0; i < n; i++) {
//             p1Lat = latArray[i] - latitude;
//             p1Long = longArray[i] - longitude;
//             p2Lat = latArray[(i+1)%n] - latitude;
//             p2Long = longArray[(i+1)%n] - longitude;
//             debugger
//             angle += angle2D(p1Lat,p1Long,p2Lat,p2Long);
//         }

//         return !(Math.abs(angle) < PI);
// }
    
// function angle2D(y1, x1, y2, x2) {
//     let dtheta,theta1,theta2;

//     theta1 = Math.atan2(y1,x1);
//     theta2 = Math.atan2(y2,x2);
//     dtheta = theta2 - theta1;
//     while (dtheta > PI)
//         dtheta -= TWOPI;
//     while (dtheta < -PI)
//         dtheta += TWOPI;

//     return dtheta;
// }
    
// function isValidCoordinate(lattt,looong) {
//     debugger
//     return (
//     lattt !== '' && looong !== '' && !isNaN(lattt) 
//         && !isNaN(looong) && lattt > -90 &&
//         lattt < 90 && looong > -180 && looong < 180
//         )
// }
// let lattt = 39.962169;
// let looong = -82.893004;
// // Lat 
// let arrayla = [40.322549, 40.138023, 39.86872, 39.445821, 39.343939, 39.020334, 38.609443, 38.471953, 38.057908, 37.867350, 37.362602, 37.537040, 37.676297, 37.971352, 38.81518, 38.746670, 38.213451, 39.122686, 38.265225, 38.72953, 39.360930, 39.598364, 40.171610, 40.939533, 41.005893, 41.583687, 41.583687, 41.632977, 41.287175, 41.270662, 40.989309, 40.690092];
// let arraylo = [-78.543860, -77.906653, -77.906653, -77.862708, -77.269446, -76.851966, -76.895911, -77.027747, -77.730872, -78.170325, -78.126380, -78.829505, -79.510657, -80.543372, -80.807044, -81.378333, -82.169348, -83.202063, -83.421790, -83.817298, -84.322669, -84.388587, -84.322669, -84.037024, -83.114173, -82.323157, -81.532141, -80.235755, -79.049231, -78.499915, -78.170325, -78.390052];
// let lleng = arrayla.length;
// console.log(isCoordinateInsidePitch(lattt, looong, arrayla, arraylo, lleng));
// console.log(isValidCoordinate(lattt, looong));


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