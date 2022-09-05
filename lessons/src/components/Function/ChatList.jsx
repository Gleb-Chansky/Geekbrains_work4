import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getChats } from "../../redux/chatReducer/selectors";
import { List, ListItem } from "@mui/material";

export const ChatList = () => {

    const [name, setName] = useState('');


    const chats = useSelector(getChats)
    const dispatch = useDispatch()

    const deleteItem = (id) => {
        dispatch({type:'delete', payload: id})
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
            dispatch({type:'add', payload:obj})
            setName('');
        } else {
            return;
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
                chats.map((item) => (
                    <ListItem key={item.id}>{item.name} <button onClick={() => deleteItem(item.id)}>x</button></ListItem>
                ))
            }
            </List>
            </div>
    )
}

