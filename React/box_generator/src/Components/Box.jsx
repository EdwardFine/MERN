import React, {useState} from 'react'
import '../App.css'

const Box = () => {
    let [color,setColor] = useState("#000000");
    let [width,setWidth] = useState(150);
    let [height,setHeight] = useState(150);
    
    const [allBoxes,setAllBoxes] = useState([]);

    const createBox = (e) =>{
        e.preventDefault();
        let boxObj = {color,width,height}
        setAllBoxes([...allBoxes,boxObj]);
        setColor("#000000");
        setHeight(150);
        setWidth(150);
    }

  return (
    <div>
        <label htmlFor="color">Color: </label>
        <input type="color" name='color' onChange={(e)=>setColor(e.target.value)} value={color}/>
        <br />
        <label htmlFor="width">Width: </label>
        <input type="number" name='width' onChange={(e)=>setWidth(e.target.value)} value={width}/>
        <br />
        <label htmlFor="height">Height: </label>
        <input type="number" name='height' onChange={(e)=>setHeight(e.target.value)} value={height}/>
        <br />
        <button onClick={createBox}>Create Box</button>
        <div className='box-container'>
            {allBoxes.map((b,i)=>{
                return(
                    <div key={i} style={{backgroundColor:b.color,width:b.width+"px",height:b.height+"px"}}>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Box