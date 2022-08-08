import React,{Component} from 'react'
import {Input} from './InputClass'
import { Button } from './ButtonClass'
import '../../style.css'


export class Form extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        messageList: [{}],
        message: ''
    }

    handleChange(ev) {
        this.setState({message: ev.target.value})
    }

    handleClick = () => {
        if (this.state.message) {
            this.setState({ messageList: [...this.state.messageList, { author: 'you', text: (this.state.message) }] })
            console.log(this.state.messageList)
        } else {
            this.setState({messageList:[this.state.messageList]});
        }
    }

    componentDidUpdate() {
        const lastEl = this.state.messageList[this.state.messageList.length - 1]
        if ( lastEl.author === 'you') {
                const timer = setTimeout(() => {
                    this.setState({messageList:[...this.state.messageList, { author: 'bot', text: ('Hello') }]});
                return clearTimeout(timer);
                }, 1500);
            } else {
                this.setState(this.messageList);
            }  
    }

    render() {
        return(
            <>
                     <ul>
                        {this.state.messageList.length>1 && this.state.messageList.map(message =>
                            <li key={message.id}>{message.author}:{message.text}</li>)}
                    </ul >
                <Input handleChange={this.handleChange} value={this.state.value} />
                <Button handleClick={this.handleClick} />
                </>
            )
    }
}