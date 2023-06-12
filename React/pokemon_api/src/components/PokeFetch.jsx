import React,{useState} from 'react'

const PokeFetch = () => {
    const [poke,setPoke] = useState([]);

    const fetchPoke = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response)=>response.json())
        .then((response)=>{
            console.log(response)
            setPoke(response.results)
        })
        .catch((error) => console.log(error))
    }

  return (
    <div style={{marginTop:'25px'}}>
        <button onClick={fetchPoke}>Fetch Pokemon</button>
        <ul>
        {poke.map((p,i)=>{
            return(
                <li key={i}>
                    <p>{p.name[0].toUpperCase() + p.name.slice(1)}</p>
                    <hr />
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default PokeFetch