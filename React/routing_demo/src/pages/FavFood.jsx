import React from 'react'
import { useParams } from 'react-router-dom';

const FavFood = () => {
    const {food="pizza"} = useParams();
  return (
    <div>
        <h1>Favorite Food</h1>
        <p>Your Favorite food is: <strong>{food}</strong></p>
    </div>
  )
}

export default FavFood