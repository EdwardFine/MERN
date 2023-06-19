import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"

const ProductList = (props) => {
    const {products} = props

    const deleteProduct =(id)=>{
        axios.delete("http://localhost:8000/api/products/"+id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        props.updateList();
    }

  return (
    <div>
        {products.map((p,i)=>{
            return(
                <div key={i}>
                    <Link to={`/product/${p._id}`}><h1>{p.title}</h1></Link>
                    <Link to={`/update/${p._id}`}>Update</Link> <br />
                    <button onClick={()=>deleteProduct(p._id)}>Delete</button>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default ProductList