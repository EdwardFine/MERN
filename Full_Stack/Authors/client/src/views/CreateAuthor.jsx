import React,{useState} from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateAuthor = (props) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("")
  const createAuthor =(name)=>{
    axios.post("http://localhost:8000/api/authors",{name:name})
    .then((author)=>{
      author.data.hasOwnProperty("errors")
      ?setErrors(author.data.errors.name.message)
      :navigate('/');
    })
    .catch(err=>console.log(err)
)
  }

  return (
    <div>
        <AuthorForm initialName="" version="Create" propSubmit={createAuthor} errors={errors}/>
    </div>
  )
}

export default CreateAuthor