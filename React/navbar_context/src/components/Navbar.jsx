import React,{useContext} from 'react'
import NameContext from '../context/NameContext'

const Navbar = () => {
    const context = useContext(NameContext);
  return (
    <div style={{width:'100%',height:'70px',backgroundColor:'rebeccapurple',color:'white',paddingTop:'25px'}}>
        <h1 style={{marginTop:'0'}}>Hello {context.name}</h1>
    </div>
  )
}

export default Navbar