import React from 'react'

const DisplayPerson = (props) => {
    const {person} = props
  return (
    <div>
        <h1>{person.name}</h1>
        <p><strong>Height: </strong>{person.height} cm</p>
        <p><strong>Mass: </strong>{person.mass} kg</p>
        <p><strong>Hair Color: </strong>{person.hair_color}</p>
        <p><strong>Skin Color: </strong>{person.skin_color}</p>
        <p><strong>Gender: </strong>{person.gender}</p>
    </div>
  )
}

export default DisplayPerson