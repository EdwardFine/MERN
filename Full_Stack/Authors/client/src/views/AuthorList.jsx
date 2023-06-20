import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((authors)=>{
            setAuthors(authors.data.result);
            setLoaded(true);
        })
        .catch((err)=>console.log(err))
    },[loaded])

    const deleteAuthor =(id)=>{
        axios.delete("http://localhost:8000/api/authors/"+id)
        .then(setLoaded(false))
        .catch()
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={'/create'}><button className='btn btn-outline-primary'>Create Author</button></Link>
        <div className="d-flex justify-content-center mt-5">
            {loaded &&
            <table className='table table-info table-striped' style={{width:'75%'}}>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                </thead>
                <tbody>
                    {authors.map((a,i)=>{
                        return(
                        <tr key={i}>
                            <td>{a.name}</td>
                            <td>
                                <Link to={`/update/${a._id}`}><button className='btn btn-warning'>Edit</button></Link> | <button className='btn btn-danger' onClick={()=>deleteAuthor(a._id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
}
        </div>
    </div>
  )
}

export default AuthorList