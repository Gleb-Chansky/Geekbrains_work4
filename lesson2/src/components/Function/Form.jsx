import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField, ThemeProvider, Box, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { ChatList } from './ChatList';
import '../../style.css';

const Form = () => {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');

    const theme = createTheme({
        palette: {
            primary: {
                main: red[700],
            }
        }
    })


    const handleChange = (ev) => {
        setMessage(ev.target.value);
    }

    const handleClick = () => {
        if (message) {
            setMessageList([...messageList, { author: 'You', text: (message) }]);
            setMessage('');
        } else {
            setMessageList(messageList);
        }
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    useEffect(() => {
        const lastEl = messageList[messageList.length - 1]
        if (messageList.length === 0) {
            setMessageList(messageList);
        } 
        else if ( lastEl.author === 'You') {
                const timer = setTimeout(() => {
                    setMessageList([...messageList, { author: 'Bot', text: ('Hello') }]);
                return clearTimeout(timer);
                }, 1500);
            }
    }, [messageList]);
    
    
    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <ChatList/>
                <Box component="form"
                className='chat__box'
                >
                    <ul className='chat'> 
                    {messageList.map((message, index) =>
                        <li key={index}
                            className='chat__item'>
                            {message.author}: {message.text}
                        </li>
                    )}
                    </ul >
            
                    <TextField
                        className='chat__input'
                        onChange={handleChange}
                        value={message}
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        ref={inputRef}
                        size="small"
                        focused
                    />
                    <Button
                        className='chat__button'
                        onClick={handleClick}
                        variant="contained">
                        Send
                    </Button>
                </Box>
            </div>
        </ThemeProvider>
    )
       
}

export default Form;


