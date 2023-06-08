import React, { useState } from  'react';

    const darkMode = {
        backgroundColor:'black',
        color:"white"
    }
    const lightMode = {
        backgroundColor:"white",
        color:"black"
    }
    
const Form = (props) => {
    // Create Pets with variables name, type, age, and img
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [age, setAge] = useState("");
    const [img , setImg] = useState("");

    let [listOfPets, setListOfPets] = useState([]);

    const [light, setLight] = useState(true)

    const lightSwitch = () => setLight(!light)

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("Form Submitted ",name,type,age,img)
        let petObj = {name, type, age, img}
        setListOfPets([...listOfPets, petObj])
    }

    return(
        <div style={light?lightMode:darkMode}>
            <h1>Form Demo</h1>
            <button onClick={lightSwitch} className='btn btn-primary'>{light?"Dark Mode":"Light Mode"}</button>
            <form onSubmit={ submitHandler }>
                <div className='form-group'>
                    <label>Pet Name: </label> 
                    <input type="text" onChange={ (e) => setName(e.target.value) } className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Pet Type: </label> 
                    <input type="text" onChange={ (e) => setType(e.target.value) } className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Pet Age: </label>
                    <input type="number" onChange={ (e) => setAge(e.target.value) } className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Pet Image: </label>
                    <input type="txt" onChange={ (e) => setImg(e.target.value) } className='form-control'/>
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
                            <h4>{p.type}</h4>
                            <h5>Age: {p.age}</h5>
                            <img src={p.img} alt="Pet Image" style={{width:'300px'}}/>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
    
export default Form;
