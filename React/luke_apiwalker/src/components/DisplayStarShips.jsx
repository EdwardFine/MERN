import React from 'react'

const DisplayStarShips = (props) => {
    const {starship} = props
  return (
    <div>
        <h1>{starship.name}</h1>
        <p><strong>Model: </strong>{starship.model}</p>
        <p><strong>Cost in Credits: </strong>{parseInt(starship.cost_in_credits).toLocaleString()}</p>
        <p><strong>Passengers: </strong>{starship.passengers}</p>
        <p><strong>Manufacturer: </strong>{starship.manufacturer}</p>
    </div>
  )
}

export default DisplayStarShips