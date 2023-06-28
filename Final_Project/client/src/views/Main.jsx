import React, { useState} from 'react'
import GetCarForm from "../components/GetCarForm";
import axios from 'axios'
import process from '../config/process.env'
import "../App.css"
import Map from '../components/Map'
import GetStartEndLoc from '../components/GetStartEndLoc';
import Accordion from 'react-bootstrap/Accordion';

const API_NINJA_KEY = process.env.API_NINJA_KEY;
const API_GAS_KEY = process.env.API_GAS_KEY;
const API_MAPS_KEY = process.env.API_MAPS_KEY;

const gasConfig = {
    headers: {
        'Authorization': API_GAS_KEY
    }
}
const carConfig = {
    headers: {
        'X-Api-Key': API_NINJA_KEY
    }
}

const Main = () => {
    const [carMiles, setCarMiles] = useState(0);
    const [start, setStart] = useState({});
    const [end, setEnd] = useState({});
    const [newLocations, setNewLocations] = useState(false);
    const [gasCost,setGasCost]=useState(0);
    

    const getCar = (carData) => {
        axios.get(`https://api.api-ninjas.com/v1/cars?make=${carData.make}&model=${carData.model}&year=${carData.year}&limit=1`, carConfig)
            .then(res => setCarMiles(res.data[0].combination_mpg))
            .catch(err => console.log(err))
    }

    const getLocations = (start, end) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${start.city}+${start.state}&key=${API_MAPS_KEY}`)
            .then((res => setStart(res.data.results[0].geometry.location)))
            .catch((err => console.log(err)))
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${end.city}+${end.state}&key=${API_MAPS_KEY}`)
            .then((res => setEnd(res.data.results[0].geometry.location)))
            .catch((err => console.log(err)))
        setNewLocations(true)
    }

    const setWaypoints = (waypoints) => {
        setNewLocations(false);
        //setGasStops();
        getGasCost(getGasStops(waypoints));
    }

    const getGasCost = async (stops) =>{
        let totalCost=0;
        const prices=[];
        for(let i=1;i<stops.length;i++){
            await axios.get(`https://api.collectapi.com/gasPrice/fromCoordinates?lat=${stops[i][0]}&lng=${stops[i][1]}`,gasConfig)
            .then(res=>prices.push([res.data.result.gasoline,getGap(stops[i-1],stops[i])]))
            .catch(err=>console.log(err))
        }for(let i=0;i<prices.length;i++){
            totalCost+= prices[i][0]*(prices[i][1].toFixed(2)/carMiles)
        }setGasCost(totalCost.toFixed(2));
    }

    const getGap = (start, end) => {
        const latStart = start[0] * Math.PI / 180;
        const lngStart = start[1] * Math.PI / 180;
        const latEnd = end[0] * Math.PI / 180;
        const lngEnd = end[1] * Math.PI / 180;
        const dlon = lngEnd - lngStart;
        const dlat = latEnd - latStart;
        const a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(latStart) * Math.cos(latEnd) * Math.pow(Math.sin(dlon / 2), 2);
        const c = 2 * Math.asin(Math.sqrt(a));
        const r = 3956;
        return (c * r);
    }

    const getGasStops = (waypoints) =>{
        let i=5;
        let origin = waypoints[0];
        const points = [waypoints[0]]
        while(i<waypoints.length){
            if(getGap(origin,waypoints[i])+carMiles*3 > carMiles*12){
                points.push(waypoints[i])
                origin=waypoints[i];
            }i+=5;
        }points.push(waypoints[waypoints.length-1])
        return points
    }

    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Step 1: Input Car Information</Accordion.Header>
                    <Accordion.Body>
                        <GetCarForm propSubmit={getCar}/>
                        {carMiles>0?
                        <h2>Car Found</h2>:
                        <h2>Car Not Found</h2>}
                    </Accordion.Body>
                </Accordion.Item>
                {carMiles>0?
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Step 2: Input Origin and Destination</Accordion.Header>
                    <Accordion.Body>
                        <GetStartEndLoc propSubmit={getLocations} />
                        <div className='d-flex justify-content-center mt-3' style={{gap:'2em',position:'relative',left:'2em'}}>
                        {start.hasOwnProperty("lat") ? <h2>Origin Found</h2>:<h2>Origin Not Found</h2>} 
                        <h2>|</h2>
                        {end.hasOwnProperty("lat") ? <h2>Destination Found</h2>:<h2>Destination Not Found</h2>}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                :""}
            </Accordion>
            {gasCost>0?
            <div style={{color:'white', marginTop:'1em'}}>
                <h1>You can expect to spend around ${gasCost} on your roadtrip.</h1><br />
                <h2>*Price not including filling your tank to start.</h2>
            </div>
            :""}
            <Map start={start} end={end} setRouteWaypoints={setWaypoints} newDirections={newLocations} />
        </div>
    )
}

export default Main