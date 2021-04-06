import React, {useState, useEffect} from "react";
import { GoogleMap, StandaloneSearchBox, Marker } from "@react-google-maps/api";

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
    })

    return (
        <div>
            <h1>Map</h1>
        </div>
    )
}
export default Map;