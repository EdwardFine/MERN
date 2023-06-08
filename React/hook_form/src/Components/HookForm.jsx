import React,{useState} from 'react'

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    let [listOfUsers, setListOfUsers] = useState([]);

    const createUser = (e) =>{
        e.preventDefault();
        let userObj = {firstName,lastName,email,password,conPassword};
        setListOfUsers([...listOfUsers,userObj]);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConPassword("");
    }

  return (
    <div>
        <form onSubmit={createUser}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/><br />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name='lastName' onChange={(e)=>setLastName(e.target.value)} value={lastName}/><br />
            <label htmlFor="email">Email: </label>
            <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/><br />
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} value={password}/><br />
            <label htmlFor="conPassword">Confirm Password:  </label>
            <input type="password" name='conPassword' onChange={(e)=>setConPassword(e.target.value)} value={conPassword}/><br />
            <input type="submit" value="Create User" />
        </form>
        <div>
            <hr />
            {listOfUsers.map((u,i)=>{
                return(
                    <div>
                        <p>First Name: {u.firstName}</p>
                        <p>Last Name: {u.lastName}</p>
                        <p>Email: {u.email}</p>
                        <p>Password: {u.password}</p>
                        <p>Confirm Password: {u.conPassword}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default HookForm