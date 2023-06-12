import React,{useContext} from 'react'
import NameContext from '../context/NameContext';

const Form = () => {
    const context = useContext(NameContext)
  return (
    <div style={{marginTop:'20px'}}>
        <label htmlFor="name">Your Name: </label>
        <input type="text" name='name' placeholder='Your name' onChange={(e)=>context.setName(e.target.value)}/>
    </div>
  )
}

export default Form