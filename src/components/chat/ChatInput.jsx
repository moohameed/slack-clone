import { Button } from '@material-ui/core';
import React, {  useState } from 'react' ;
import styled from 'styled-components';
import { db } from '../../firebase';
import firebase from "firebase/compat/app"
import { doc } from "firebase/firestore"; 

function ChatInput({channelName , channelId}) {
    console.log(channelId);
    const [input , setInput] = useState("") ; 
    const sendMessage = (e) => {
        
        e.preventDefault() ; //! we are saying here don't refresh the page when we hit enter or send
        if (!channelId) {
            return false ;
        }
  
        db.collection("rooms").doc(channelId).collection("messages").add({
            message : input ,
            timestamp : firebase.firestore.FieldValue.serverTimestamp() , 
            user : "mohamed" ,
            userImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUDIXl9I8drKFgKvluvPfXcNdBP3-IzddTQ&usqp=CAU"
        }) ; 

        setInput("") ;
    }
    return (
        <ChatInputContainer>
                <form>
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder= {` Message #ROOM`} />
                    <Button hidden type='submit' onClick={sendMessage}>Send</Button>

                </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div `
border-radius: 20px;

>form{
    position: relative;
    display: flex;
    justify-content: center;
}

>form>input {

    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}
>form > button {
   
}

` ;