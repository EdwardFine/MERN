import React,{useState} from 'react'

const IceCreamDashboard = (props) => {
    const {orders} = props

    const [listOfOrders,setListOfOrders] = useState(orders);

  return (
    <div className='mt-5'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Flavor</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Sprinkles</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((o,i)=>{
                    return(
                        <tr key={i}>
                            <td>{o.flavor}</td>
                            <td>{o.quantity}</td>
                            <td>{o.cost.toFixed(2)}</td>
                            <td>{o.sprinkles ? "Yes":"No"}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={() => props.handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default IceCreamDashboard