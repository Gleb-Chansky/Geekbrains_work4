import React, { useState } from "react";
import { List, ListItem } from "@mui/material";

export const ChatList = () => {

    const [name, setName] = useState('');


    const [chatList, setChatList] = useState([
        {
            id: 1,
            name: "Kirill Bunin"
        },
        {
            id: 2,
            name: "Alexei Ivanon"
        },
        {
            id: 3,
            name: "Svetlana Butakova"
        }
    ])

    const deleteItem = (id) => {
        const filteredChatList = chatList.filter((item) => item.id !== id)
        setChatList(filteredChatList);
    }

    const handleChange = (event) => {
        setName(event.target.value);
    } 

    const addItem = () => {
        if (name) {
            const randomId = Math.random();
            const obj = {
                name: name,
                id: randomId
            }
            setChatList(prevState => [...prevState, obj])
            setName('');
        } else {
            setChatList(chatList);
        }
    }

    return (
        <div>
            <div className="chat__push">
                <input
                    className="chat__push-input"
                    type="text"
                    onChange={handleChange}
                    value={name} />
                <button onClick={addItem}>Добавить собеседника</button>
            </div>
        <List className="chat__list">
            {
                chatList.map((item) => (
                    <ListItem key={item.id}>{item.name} <button onClick={() => deleteItem(item.id)}>x</button></ListItem>
                ))
            }
            </List>
            </div>
    )
}

