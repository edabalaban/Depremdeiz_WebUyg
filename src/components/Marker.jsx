import React from "react";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs
} from "react-google-maps";

const Markers = props => {
    return (
        <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
            <Marker
                position={{ lat: props.place.lat, lng: props.place.lng }}
                draggable={false}
            />
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Markers));