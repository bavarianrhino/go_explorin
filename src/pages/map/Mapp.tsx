import React from 'react';
import { Plugins } from '@capacitor/core';
import { IonContent } from '@ionic/react';
import { withIonLifeCycle } from '@ionic/react';
// import { GOOGMAPKEY } from '../../utils/data';
// import { MAPBOXKEY } from '../../utils/data';
// import { Location } from '../models/Location';

// interface MapProps {
//   locations: Location[]
//   mapCenter: Location
// }
// const Map: React.FC<MapProps> = ({ mapCenter, locations }) => {


class Mapp extends React.Component {

    state = {
        coords: {
            latitude: 0,
            longitude: 0
        },
        watchId : "somestring",
        watchId2 : "somestring"  
    }

    ionViewWillEnter() {
        this.ionViewWillEnterLog()
        this.getPosition()
        this.lookAtPosition()
        this.lookAtPosition2()
        this.nonCapacitorGetPosition()
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

    render () {
        return (
            <IonContent>
                <div className="map-canvas"></div>
            </IonContent>
        );
    }
}
export default withIonLifeCycle(Mapp);