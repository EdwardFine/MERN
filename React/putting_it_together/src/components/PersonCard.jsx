import React,{useState} from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    let [a, setAge] = useState(age);
    const updateAge = () => setAge(a+1);
  return (
    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {a}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={updateAge}>Another year older!</button>
    </div>
  )
}

export default PersonCard