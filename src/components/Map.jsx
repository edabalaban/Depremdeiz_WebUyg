import React, { useState, useEffect } from "react";
import Marker from "./Marker"

function Map() {
    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    },[])

    return (
        <Marker
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDvT06eiA96XqF5S9ajMkRTXEKtmnbLlEk"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={{
                lat: 39.92077, lng: 32.85411 }}
            zoom={10}
            place={currentPosition}
        />
    )
}
export default Map;