import React, {useReducer} from 'react'


const Form = () => {
    const initialState ={
        firstName:{value:"", error:true},
        lastName:{value:"",error:true},
        email:{value:"",error:true}
    }
    
    const reducer =(state,action)=> {
        if(action.type==='email'){
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(action.payload)){
                return {...state, [action.type]:{value:action.payload,error:false}}
            }else{
                return {...state, [action.type]:{value:action.payload,error:true}}
            }
        }else{
            if(action.payload.length<4){
                return {...state, [action.type]:{value:action.payload,error:true}}
            }else{
                return {...state, [action.type]:{value:action.payload,error:false}}
            }
        }
    }

    const [state,dispatch] = useReducer(reducer, initialState);

    const handleChange=(e)=>{
        const {name,value} = e.target;
        dispatch({
            type:name,
            payload:value
        })
    }

  return (
    <div>
        {JSON.stringify(state)}
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name='firstName' value={state.firstName.value} onChange={handleChange}/> <br />
            {state.firstName.error?<h3 style={{color:'red'}}>First Name must be at least 3 characters long</h3>:""}
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name='lastName' value={state.lastName.value} onChange={handleChange}/> <br />
            {state.lastName.error?<h3 style={{color:'red'}}>Last Name must be at least 3 characters long</h3>:""}
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' value={state.email.value} onChange={handleChange} /><br />
            {state.email.error?<h3 style={{color:'red'}}>Invalid email</h3>:""}
        </div>
    </div>
  )
}

export default Form