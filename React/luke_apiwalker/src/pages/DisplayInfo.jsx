import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import DisplayPerson from '../components/DisplayPerson'
import DisplayPlanet from '../components/DisplayPlanet'
import DisplayStarShips from '../components/DisplayStarShips'
import DisplayFilms from '../components/DisplayFilms'
import DisplaySpecies from '../components/DisplaySpecies'

const DisplayInfo = () => {
    const {catagory='people',id=1} = useParams();
    const [info,setInfo] = useState([]);
    const [infoErrors,setInfoErrors] = useState();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${catagory}/${id}`)
        .then((response)=>{
            console.log(response.data)
            setInfo(response.data)
            setInfoErrors();
        })
        .catch((errors)=>setInfoErrors(errors))
    },[catagory,id])
    
  return (
    <div>
        {infoErrors?<h1>Bad Request. Try a different request.</h1>:
        catagory==='people'?<DisplayPerson person={info}/>:
        catagory==='planets'?<DisplayPlanet planet={info}/>:
        catagory==='starships'?<DisplayStarShips starship={info}/>:
        catagory==='films'?<DisplayFilms film={info}/>:
        <DisplaySpecies species={info}/>}
    </div>
  )
}

export default DisplayInfo