import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = (props) => {
    const {currentPage} = props;
    const navigate = useNavigate();

    const processPage =(pageVal) => {
        if(pageVal===currentPage){
            //pass
        }else if(pageVal===1){
            navigate('/status/game/1');
        }else{
            navigate('/players/list');
        }
    }

  return (
    <div style={{margin:"2em 0 2em 0"}}>
        <button className='btn btn-warning' onClick={()=>processPage(0)}>Manage Players</button> | <button className='btn btn-danger' onClick={()=>processPage(1)}>Manage Player Status</button>
    </div>
  )
}

export default Navbar