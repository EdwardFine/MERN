import React,{useEffect,useState} from 'react'
import axios from "axios"

const Main = () => {
    const [formData,setformData]=useState({title:"",price:"",description:""});


    const handleChange =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setformData({...formData,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products",formData)
        .then((res) => console.log(res))
        .catch((err)=> console.log(err));
        setformData({title:"",price:"",description:""})
    }
  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name='title' value={formData.title} onChange={handleChange}/> <br />
            <label htmlFor="price">Price: </label>
            <input type="number" name="price" value={formData.price} onChange={handleChange}/> <br />
            <label htmlFor="description">Description:</label>
            <input type="text" name='description' value={formData.description} onChange={handleChange} /> <br />
            <button>Create Product</button>
        </form>
    </div>
  )
}

export default Main