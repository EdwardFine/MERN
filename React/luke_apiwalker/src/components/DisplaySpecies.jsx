import React from 'react'

const DisplaySpecies = (props) => {
    const {species} = props;
  return (
    <div>
        <h1>{species.name}</h1>
        <p><strong>Average Height: </strong>{species.average_height} cm</p>
        <p><strong>Average Life Span: </strong>{species.average_lifespan} years</p>
        <p><strong>Classification: </strong>{species.classification}</p>
        <p><strong>Designation: </strong>{species.designation}</p>
        <p><strong>Language: </strong>{species.language}</p>
    </div>
  )
}

export default DisplaySpecies