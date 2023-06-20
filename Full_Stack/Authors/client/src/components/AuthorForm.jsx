import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const formStyle = {
  border: '2px solid black',
  width: '75%',
  padding:'1em 3em 1em 3em',
}

const AuthorForm = (props) => {
  const navigate = useNavigate();
  const { initialName, version, propSubmit,errors } = props
  const [authorName, setAuthorName] = useState(initialName)

  const handleSubmit=(e)=>{
    e.preventDefault()
    propSubmit(authorName)
  }

  return (
    <div>
      <h1>{version} Author</h1>
      <button className='btn btn-outline-primary' onClick={()=>navigate(-1)}>Go Back</button>
      {errors && <h2>{errors}</h2>}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginBottom:'2em'}}>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' value={authorName} style={{width:'75%'}} onChange={(e)=>setAuthorName(e.target.value)}/>
          </div>
          <button className='btn btn-outline-danger'>{version} Author</button>
        </form>
      </div>
    </div>
  )
}

export default AuthorForm