import React from 'react'
import {Link} from "react-router-dom"

const ProductList = (props) => {
    const {products} = props
  return (
    <div>
        {products.map((p,i)=>{
            return(
                <div key={i}>
                    <Link to={`/product/${p._id}`}><h1>{p.title}</h1></Link>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default ProductList