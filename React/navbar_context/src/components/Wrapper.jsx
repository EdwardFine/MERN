import React,{useState} from 'react'
import NameContext from '../context/NameContext'

const Wrapper = (props) => {
    const [name, setName] = useState("Name");
  return (
    <div>
        <NameContext.Provider value={{name,setName}}>
            {props.children}
        </NameContext.Provider>
    </div>
  )
}

export default Wrapper