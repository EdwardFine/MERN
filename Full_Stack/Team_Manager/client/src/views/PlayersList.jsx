import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import { Link } from 'react-router-dom'

const PlayersList = () => {
  return (
    <div>
        <Navbar currentPage={0}/>
        <div className='flex-center'>
            <div className='main-box'>
                <h1 style={{textAlign:'left'}}>
                    <span className='mock-link'>List</span> | <Link>Add Player</Link>
                </h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Perferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default PlayersList