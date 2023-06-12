import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import ColorContext from '../context/ColorContext';

const UseEffectAPI = () => {
    const {themeColor,setThemeColor} = useContext(ColorContext);
    const [coin,setCoin]=useState([]);
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=martket_cap_desc&per_page=100")
        .then((response)=>setCoin(response.data))
        .catch((error) => console.log(error))
        console.log("API Probed")
    },[])
  return (
    <div style={{backgroundColor:themeColor}}>
        <h1>UseEffectAPI</h1>
        <input type="color" onChange={(e)=>setThemeColor(e.target.value)}/>
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

export default UseEffectAPI