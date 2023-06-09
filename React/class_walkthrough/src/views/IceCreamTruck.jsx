import React,{useState} from 'react'
import IceCreamForm from '../components/IceCreamForm'
import IceCreamDashboard from '../components/IceCreamDashboard';

const IceCreamTruck = () => {
    const [iceCreamList,setIceCreamList] = useState([]);
    
    const recieveOrder = (newOrder) =>{
        setIceCreamList([...iceCreamList,newOrder]);
    }

    const removeFromList = (index) =>{
        let filteredOrders = iceCreamList.filter((order,i)=>i!=index)
        setIceCreamList(filteredOrders)
    }

  return (
    <div>
        <h1>Ice Cream Dashboard</h1>
        <IceCreamForm onNewOrder={recieveOrder}/>
        <IceCreamDashboard orders = {iceCreamList} handleDelete={removeFromList}/>
    </div>
  )
}

export default IceCreamTruck