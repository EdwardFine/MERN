import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Detail = (props) => {
    const [product,setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>setProduct(res.data.result))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <h1>{product.title}</h1>
        <h2>{parseFloat(product.price).toFixed(2)}</h2>
        <h3>{product.description}</h3>
    </div>
  )
}

export default Detail