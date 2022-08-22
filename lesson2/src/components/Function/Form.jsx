import React,{useState, useEffect} from 'react'
import {Input} from './Input'
import { Button } from './Button'
import '../../style.css'

const Form = () => {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');


    const handleChange = (ev) => {
        setMessage(ev.target.value);
    }

    const handleClick = () => {
        if (message) {
            setMessageList([...messageList, { author: 'you', text: (message) }]);
            setMessage('');
        } else {
            setMessageList(messageList);
        }
    }



    useEffect(() => {
        const lastEl = messageList[messageList.length - 1]
        if (messageList.length === 0) {
            setMessageList(messageList);
        } 
        else if ( lastEl.author === 'you') {
                const timer = setTimeout(() => {
                    setMessageList([...messageList, { author: 'bot', text: ('Hello') }]);
                return clearTimeout(timer);
                }, 1500);
            }
    }, [messageList]);
    
    
    return(
        <> 
            <ul> 
            {messageList.map((message) =>
                <li key={message.id}>{message.author}:{message.text}</li>)}
        </ul >
             
            <Input change={handleChange} message={message} />
        <Button click={handleClick} />
        </>
    )
       
}

export default Form;


