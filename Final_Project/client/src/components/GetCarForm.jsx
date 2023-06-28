import React, { useState } from 'react'



const GetCar = (props) => {
  const { propSubmit } = props
  const [car, setCar] = useState({ make: "", model: "", year: "" })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCar({ ...car, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    propSubmit(car);
    setCar({ make: "", model: "", year: "" })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='d-flex justify-content-center align-items-center mb-2' style={{ gap: '1em' }}>
          <div>
            <label htmlFor="make">Make:</label> <br /> <br />
            <label htmlFor="model">Model:</label> <br /> <br />
            <label htmlFor="year">Year:</label>
          </div>
          <div>
            <input type="text" name='make' value={car.make} onChange={(e) => handleChange(e)} /> <br /> <br />
            <input type="text" name='model' value={car.model} onChange={(e) => handleChange(e)} /> <br /> <br />
            <input type="number" name='year' value={car.year} onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <button className='btn btn-dark'>Find Car</button>
      </form>
    </div>
  )
}

export default GetCar