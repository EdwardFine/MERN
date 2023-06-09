import React, {useState}from 'react'
import MessageForm from '../components/MessageForm';
import MessageDisplay from '../components/MessageDisplay';
import MessageHistory from '../components/MessageHistory';

const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const [allMessages, setAllMessages] = useState([])
  const youveGotMail = (newMessage) =>{
    setCurrentMsg(newMessage);
    setAllMessages([...allMessages,newMessage])
  }
  return (
    <div>
        <MessageForm onNewMessage = {youveGotMail}/>
      <MessageDisplay message={currentMsg}/>
      <MessageHistory allMessages = {allMessages}/>
    </div>
  )
}

export default MessageBoard