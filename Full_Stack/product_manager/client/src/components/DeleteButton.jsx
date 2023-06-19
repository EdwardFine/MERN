import React from 'react'

const DeleteButton = (props) => {
    const {successCallback} = props;
  return (
    <button onClick={successCallback}>
        Delete
    </button>
  )
}

export default DeleteButton