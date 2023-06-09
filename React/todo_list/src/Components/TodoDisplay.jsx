import React, {useState} from 'react'

const TodoDisplay = (props) => {
    const {allTasks} = props;

  return (
    <div>
        {allTasks.map((t,i)=>{
            return(
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}} key={i}>
                    {!t.done ? <p>{t.task}</p> :<s>{t.task}</s>} 
                    <input type="checkbox" value={t.done} onChange={()=>props.handleUpdate(i)}/>
                    {t.done? <button onClick={()=>props.handleDelete(i)}>Delete</button> : "" }
                </div>
            )
        })}
    </div>
  )
}

export default TodoDisplay