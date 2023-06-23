import React,{useState,useEffect} from 'react'
import io from "socket.io-client"

const Chat = () => {
    //State Variables? 
    const [approve,setApprove] = useState(false);
    const [username, setUsername] = useState("");
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [socket] = useState(()=>io(':8000'));

    useEffect(() => {
        // we need to set up all of our event listeners
        // in the useEffect callback function
        console.log('Is this running?');
        socket.on('Post Chat', msg => setMessages(prevMsgState => [...prevMsgState,msg]));
     
        // note that we're returning a callback function
        // this ensures that the underlying socket will be closed if App is unmounted
        // this would be more critical if we were creating the socket in a subcomponent
        return () => socket.removeAllListeners;
      }, [socket]);

  const usernameHandler = (e) =>{
    e.preventDefault();
    if(username){
      setApprove(true)
    }
  }

  const messageHandler = (e)=>{
    e.preventDefault();
    socket.emit("chat",{username:username, content:input});
    setInput("");
  }

  const renderChat =() =>{
    return messages.map((msg,idx)=>{
      return (
        <div key={idx}>
          <p>{msg.username}: {msg.content}</p>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Socket.io Chat</h1>
        {
          !approve 
          ?<div className='card'>
            <div className='name-field'>
              <form onSubmit={usernameHandler}>
                <label htmlFor="username">Enter your name: </label>
                <input type="text" className='form-inline' onChange={(e)=>setUsername(e.target.value)} value={username}/> <br />
                <button className='btn btn-outline-dark mt-3'>Enter Chat</button>
              </form>
            </div>
          </div> 

          :<div className='card'>
              <form onSubmit={messageHandler}>
                <label htmlFor="username">Enter your message: </label>
                <input type="text" className='form-inline' name='msg' onChange={(e)=>setInput(e.target.value)} value={input}/>
                <br />
                <button className='btn btn-outline-dark mt-3'>Send Message</button>
              </form>
              <hr />
              <h1>Messages</h1>
              {renderChat()}  
            </div>
        }
    </div>
  )
}

export default Chat