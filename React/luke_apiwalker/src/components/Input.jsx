import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Input = () => {
    const navigate = useNavigate();
    const [catagory,setCatagory] = useState("people");
    const [id,setId] = useState(1);
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/${catagory}/${id}`)
    }

  return (
    <div>
        <form style={{gap:'20px',display:'flex',justifyContent:'center',margin:'20px 0 20px 0'}} onSubmit={handleSubmit}>
            <label htmlFor="catagory">Search For:</label>
            <select name="catagory" onChange={(e)=>setCatagory(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
            </select>
            <label htmlFor="id">ID: </label>
            <input type="number" name="id" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Input