import React, { useRef, useEffect } from 'react';
import { Plugins } from '@capacitor/core';
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
        }
        // mapEle: useRef<HTMLDivElement>(null),
        // map: useRef<google.maps.Map>()        
    }

    
    
    getCurrentPosition = async () => {

        // const mapEle = useRef<HTMLDivElement>(null)
        // const map = useRef<google.maps.Map>()
        const { Geolocation } = Plugins;
        const coordinates = await Geolocation.getCurrentPosition();
        this.setState({
            ...this.state,
            coords: {
                latitude: coordinates.coords.latitude,
                longitude: coordinates.coords.longitude
            }
        })
        console.log('Latitude', coordinates.coords.latitude);
        console.log('Longitude', coordinates.coords.longitude);
        console.log('Coords', this.state.coords);

        return coordinates
    }
        
        // const watchPosition = () => {
        //     const wait = Geolocation.watchPosition({}, (position, err) => {

        //     })
        // }
    // }

    // this.state.map.current = new google.maps.Map(this.state.mapEle.current, {
    //     center: {
    //         lat: mapCenter.lat,
    //         lng: mapCenter.lng
    //     },
    //     zoom: 16
    // });

    render () {
        // const { mapEle, map } = this.state
        this.getCurrentPosition()
        return (
            <div className="map-canvas"></div>
        );
    }
}
export default Mapp;
//   useEffect(() => {


    // addMarkers();

    // google.maps.event.addListenerOnce(map.current, 'idle', () => {
    //   if (mapEle.current) {
    //     mapEle.current.classList.add('show-map');
    //   }
    // });

    // function addMarkers() {
    //   locations.forEach((markerData) => {
    //     let infoWindow = new google.maps.InfoWindow({
    //       content: `<h5>${markerData.name}</h5>`
    //     });
  
    //     let marker = new google.maps.Marker({
    //       position: new google.maps.LatLng(markerData.lat, markerData.lng),
    //       map: map.current!,
    //       title: markerData.name
    //     });
  
    //     marker.addListener('click', () => {
    //       infoWindow.open(map.current!, marker);
    //     });
    //   });
    // }

//   }, [mapCenter, locations]);

// }

// export default Map;