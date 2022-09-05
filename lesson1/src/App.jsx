import './App.css';
import React, { Component } from 'react';
import { Message } from './Class/Massage';
import './Message.css'

const name = "Hello,Geekbrains"

export class App extends Component {
    render() {
        return <Message name = { name }/>
    }
}

