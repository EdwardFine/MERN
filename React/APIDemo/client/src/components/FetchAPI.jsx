//Import useState from react
//fetch
//CryptoAPI URL string
//state variables
import React,{useState} from 'react';
import axios from 'axios';


const FetchAPI = () => {
    const [coin,setCoin] = useState([]);

    const fetchData = () =>{
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=martket_cap_desc&per_page=100")
        .then((response)=>response.json())
        .then((response)=>{
            console.log(response);
            setCoin(response);
        })
        .catch((error)=>{
            console.log("This is an error from our catch method: ",error);
        })
        //async code
        console.log("I'm texting someone while waiting on a promise lifecylce to finalize")
    }

  return (
    <div>
        <h1>Fetch API Demo</h1>
        <button onClick={fetchData} className='btn btn-outline-dark'>Fetch Data!</button>
        {
            coin.map((c,idx)=>{
                return(
                    <div key={idx}>
                        <p>Unique Index Value: {idx}</p>
                        <h1>{c.name}</h1>
                        <h3>{c.id}</h3>
                        <h4>${c.current_price} USD</h4>
                        <img src={c.image} alt="Crypto Coin" style={{height:'100px'}} />
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default FetchAPI;