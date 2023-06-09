import React, { useState } from  'react';

    const darkMode = {
        backgroundColor:'black',
        color:"white"
    }
    const lightMode = {
        backgroundColor:"white",
        color:"black"
    }
    
const NewForm = (props) => {
    // Create Pets with variables name, type, age, and img
    const [formData,setFormData]=useState({
        name:'',
        type:'',
        age:0,
        img:''
    })

    let [listOfPets, setListOfPets] = useState([]);

    const [light, setLight] = useState(true)

    const lightSwitch = () => setLight(!light)

    const inputHandler = (e) =>{
        const {name,value} = e.target
        setFormData((prevState) => ({...prevState, [name]: value}));
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        setListOfPets((prevState) => [...prevState, formData])
        setFormData({
            name:'',
            type:'',
            age:0,
            img:''
        })
    }

    const deletePet = (idx) =>{
        let filteredCopy = listOfPets.filter((pet,i) => i !== idx)
        setListOfPets(filteredCopy)
    }

    return(
        <div style={light?lightMode:darkMode}>
            <h1>New Form Demo</h1>
            <button onClick={lightSwitch} className='btn btn-primary'>{light?"Dark Mode":"Light Mode"}</button>
            <form onSubmit={ submitHandler }>
                <div className='form-group'>
                    <label>Pet Name: </label> 
                    <input type="text" onChange={inputHandler} className='form-control' name='name' value={formData.name}/>
                </div>
                <div className='form-group'>
                    <label>Pet Type: </label> 
                    <input type="text" onChange={inputHandler} className='form-control' name='type' value={formData.type}/>
                </div>
                <div className='form-group'>
                    <label>Pet Age: </label>
                    <input type="number" onChange={inputHandler} className='form-control' name='age' value={formData.age}/>
                </div>
                <div className='form-group'>
                    <label>Pet Image: </label>
                    <input type="txt" onChange={inputHandler} className='form-control' name='img' value={formData.img}/>
                </div>
                <input type="submit" value="Add Pet" className='btn btn-primary mt-3'/>
            </form>
            <hr />
            <div className='pet-list'>
                {listOfPets.map((p,i) => {
                    return (
                        <div key={i}>
                            <h3>{p.name}</h3>
                            <p>This is the index value to this pet: {i}</p>
                            <h4>Type: {p.type}</h4>
                            <h5>Age: {p.age}</h5>
                            <img src={p.img} alt="Pet Image" style={{width:'300px'}}/>
                            <br />
                            <button onClick={() => deletePet(i)} className='btn btn-outline-dark'>Delete Pet</button>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
    
export default NewForm;
