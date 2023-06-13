import React from 'react'
import { useParams } from 'react-router-dom'

const ColorWord = () => {
    const {word,colorW,background} = useParams();
    const style = {
        color:colorW,
        backgroundColor:background
    }
  return (
    <div>
        {isNaN(word)?<h1 style={style}>The word is: {word}</h1>:""}
    </div>
  )
}

export default ColorWord