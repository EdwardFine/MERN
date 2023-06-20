import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateAuthor = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState("")
    const [loaded, setLoaded] = useState(false);

    const updateAuthor = (name) => {
        axios.patch("http://localhost:8000/api/authors/" + id, { name: name })
            .then((author) => {
                author.data.hasOwnProperty("errors")
                ? setErrors(author.data.errors.name.message)
                : navigate('/');
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then((author) => {
                setAuthorName(author.data.result.name);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {loaded &&
                <AuthorForm initialName={authorName} version="Update" propSubmit={updateAuthor} errors={errors}/>
            }
        </div>
    )
}

export default UpdateAuthor