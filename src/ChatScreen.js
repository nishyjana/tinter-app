import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css'
export default function ChatScreen() {
    const [input,setInput]= useState('')
    
    const [messages, setMessages]=useState([
        {
            name:"nishy",
            image:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            message:"Hi baby"
        },
        {
            name:"nishy",
            image:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            message:"Hi baby no"
        },
        {
            message:"how to ging"
        }

    ]);
    const handleSumit=e=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput('');

    }
  return (
    <div className ="chatScreen">
        <p className="chatScreen__des">You matched with nsihy </p>
           {messages.map((message)=>(
               message.name?(
               <div className="chatScreen__message">
                   <Avatar className="chat__img" alt={message.name} src={message.image}/>
                   <p className="chatScreen__text">{message.message}</p>
               </div>
               ):(
                   <div className="chatScreen__our">
                            <p className="chatScreen__ourMessage">{message.message}</p>
                   </div>
               )
           ))}   
          
    <form className="chatScreen__form">
        <input 
        placeholder="Type a Message"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className="chatScreen__input"
        type="text"></input>
        <button onClick={handleSumit} type ="submit"className="chatScreen__button">SEND</button>
    </form>

      
    </div>
  );
  
}
