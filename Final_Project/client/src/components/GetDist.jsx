import { GoogleMap, useLoadScript, DistanceMatrixService,DirectionsService,DirectionsRenderer } from "@react-google-maps/api";
import React, { useMemo,useState,useEffect } from "react";
import "../App.css";
import process from '../config/process.env'

const GetDist = (props) => {
    const {start,end,propGap} = props;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.API_MAPS_KEY,
    });
    const center = useMemo(() => ({ lat: 40, lng: -100 }), []);
    useEffect(()=>{
        console.log("GETTING DISTANCE")
    },[])
  return (
    <div>
        <div className="App">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={4}
                >
                    <DistanceMatrixService
                    options={{
                        destinations:[{lat:end[0],lng:end[1]}],
                        origins:[{lat:start[0],lng:start[1]}],
                        travelMode:"DRIVING",
                        unitSystem:1
                    }}
                    callback={(res)=>{propGap(Math.ceil(res.rows[0].elements[0].distance.value /1609));console.log(res.rows[0].elements[0].distance.value /1609)}}
                    />
                </GoogleMap>
            )}
        </div>
    </div>
  )
}

export default GetDist