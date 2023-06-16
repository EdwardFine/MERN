import React,{useEffect,useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import axios from 'axios'

const Main = () => {
    const [products,setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            setProducts(res.data.result);
            setLoaded(true)
            console.log(true)
        })
        .catch((err)=>{console.log(err)})
    },[loaded])
  return (
    <div>
        <ProductForm updateList={()=>setLoaded(!loaded)}/>
        <hr />
        {loaded && <ProductList products ={products}/>}
    </div>
  )
}

export default Main