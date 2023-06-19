import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,useNavigate}  from 'react-router-dom'

const ProductUpdate = () => {
    const navigate = useNavigate();
    const [product,setProduct] = useState({});
    const [initialTitle,setInitialTitle] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>{
            setProduct({...res.data.result,price:parseFloat(res.data.result.price).toFixed(2)})
            setInitialTitle(res.data.result.title)})
        .catch((err)=>console.log(err))
    },[])

    const handleChange =(e)=>{
        const name=e.target.name;
        const value = e.target.value
        setProduct({...product,[name]:value})
    }

    const updateProduct =(e)=>{
        e.preventDefault()
        axios.patch("http://localhost:8000/api/products/"+id,{title:product.title,price:product.price,description:product.description})
        .then()
        .catch((err)=>console.log(err))
        navigate('/')
    }

  return (
    <div>
        <h1>Updating {initialTitle}</h1>
        <form onSubmit={updateProduct}>
            <input type="text" value={product.title} onChange={handleChange} name='title'/><br />
            <input type="float" value={product.price} onChange={handleChange} name='price'/><br />
            <input type="text" value={product.description} onChange={handleChange} name='description'/> <br />
            <button>Submit</button>
        </form>
        <button onClick={()=>navigate(-1)}>Go Back</button><br />
    </div>
  )
}

export default ProductUpdate