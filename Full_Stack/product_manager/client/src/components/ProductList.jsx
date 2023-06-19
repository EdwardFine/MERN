import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const {products,deleteProduct} = props

    

  return (
    <div>
        {products.map((p,i)=>{
            return(
                <div key={i}>
                    <Link to={`/product/${p._id}`}><h1>{p.title}</h1></Link>
                    <Link to={`/update/${p._id}`}>Update</Link> <br />
                    <DeleteButton successCallback={()=>deleteProduct(p._id)}/>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default ProductList