import React from 'react'

const DisplayPlanet = (props) => {
    const {planet} = props
  return (
    <div>
        <h1>{planet.name}</h1>
        <p><strong>Climate: </strong>{planet.climate}</p>
        <p><strong>Terrain: </strong>{planet.terrain}</p>
        <p><strong>Surface Water: </strong>{planet.surface_water==='1'?"True":"False"}</p>
        <p><strong>Population: </strong>{parseInt(planet.population).toLocaleString()} {planet.name}-ians</p>
        <p><strong>Gravity: </strong>{planet.gravity}</p>
    </div>
  )
}

export default DisplayPlanet