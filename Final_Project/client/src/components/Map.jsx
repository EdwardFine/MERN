import { GoogleMap, useLoadScript,DirectionsService,DirectionsRenderer } from "@react-google-maps/api";
import React, { useMemo,useState } from "react";
import "../App.css";
import process from '../config/process.env'


const Map = (props) => {
    const polyline = require('google-polyline');
    const {start,end,setRouteWaypoints,newDirections}=props;
    const [directions, setDirections]=useState();
    const [directionsLoaded,setDirectionsLoaded] = useState(false)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.API_MAPS_KEY,
    });
    const center = useMemo(() => ({ lat: 40, lng: -100 }), []);

    return (
        <div className="App">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={4}
                >
                    {newDirections?
                    <div>
                        <DirectionsService callback={(res,status)=>{
                            setDirections(res);
                            setRouteWaypoints(polyline.decode(res.routes[0].overview_polyline));
                            setDirectionsLoaded(true);
                        }}
                        options={{
                            origin:{lat:start.lat,lng:start.lng},
                            destination:{lat:end.lat,lng:end.lng},
                            travelMode:"DRIVING",
                            unitSystem:1
                        }}/></div>:""}
                    {directionsLoaded? 
                    <DirectionsRenderer directions={directions}/>:""}
                </GoogleMap>
            )}
        </div>
    );
}

export default Map