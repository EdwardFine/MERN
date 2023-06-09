import React, {useState} from 'react'

const MessageHistory = (props) => {
    const {allMessages} = props;

  return (
    <div>
        <fieldset>
            <legend>Message History</legend>
            {allMessages.map((m,i)=>{
                return (
                    <div key={i}>
                        <p>{m}</p>
                    </div>
                )
            })}
        </fieldset>
    </div>
  )
}

export default MessageHistory