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
        {infoErrors?<div><h1>These aren't the droids you're looking for</h1> <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Frevenge-of-the-sith-2000.jpg&q=60" alt="Obi-wan" style={{width:'500px'}}/></div>:
        catagory==='people'?<DisplayPerson person={info}/>:
        catagory==='planets'?<DisplayPlanet planet={info}/>:
        catagory==='starships'?<DisplayStarShips starship={info}/>:
        catagory==='films'?<DisplayFilms film={info}/>:
        <DisplaySpecies species={info}/>}
    </div>
  )
}

export default DisplayInfo