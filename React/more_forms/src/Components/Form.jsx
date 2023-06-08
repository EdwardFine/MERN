import React,{useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

  return (
    <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/><br />
            {firstName.length<2 && firstName.length !==0? <p>First Name must be at least 2 characters</p> : ""}
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name='lastName' onChange={(e)=>setLastName(e.target.value)} value={lastName}/><br />
            {lastName.length<2 && lastName.length !==0? <p>Last Name must be at least 2 characters</p> : ""}
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/><br />
            {email.length<5 && email.length !== 0? <p>Email must be at least 5 characters</p>:""}
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} value={password}/><br />
            {password.length < 8 && password.length !==0?<p>Password must be at least 8 characters</p>:""}
            {password !== conPassword && password.length!==0 && conPassword.length !== 0?<p>Passwords must match</p>:""}
            <label htmlFor="conPassword">Confirm Password:  </label>
            <input type="password" name='conPassword' onChange={(e)=>setConPassword(e.target.value)} value={conPassword}/><br />
    </div>
  )
}

export default Form