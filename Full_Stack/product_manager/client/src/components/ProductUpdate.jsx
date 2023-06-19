import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,useNavigate}  from 'react-router-dom'
import ProductForm from './ProductForm'

const ProductUpdate = () => {
    const navigate = useNavigate();
    const [product,setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>{
            setProduct(res.data.result)
            setLoaded(true)
        })
        .catch((err)=>console.log(err))
    },[])

    const updateProduct =(product)=>{
        axios.patch("http://localhost:8000/api/products/"+id,product)
        .then()
        .catch((err)=>console.log(err))
        navigate('/')
    }

  return (
    <div>
        <h1>Updating {product.title}</h1>
        {loaded && (<ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>)}
    </div>
  )
}

export default ProductUpdate