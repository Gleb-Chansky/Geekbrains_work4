import React from "react";
import { List, ListItem } from "@mui/material";

export const ChatList = () => {
    const chatList = [
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
    ]

    return (
        <List className="chat__list">
            {
                chatList.map((item) => (
                    <ListItem key={item.id}>{item.name}</ListItem>
                ))
            }
        </List>
    )
}

