import React,{Component} from 'react'
import {Input} from './InputClass'
import { Button } from './ButtonClass'
import '../../style.css'


export class Form extends Component {

    state = {
        messageList: [],
        message: ''
    }

    handleChange = (ev) => {
        this.setState({message: ev.target.value})
    }

    handleClick = () => {
        if (message) {
            this.setState({messageList: [...messageList,{ author: 'you', text: (message) }]})
        } else {
            this.setState({messageList: [messageList]})
        }
    }

    componentDidMount() {
        const lastEl = messageList[messageList.length - 1]
        if ( lastEl.author === 'you') {
                const timer = setTimeout(() => {
                    setMessageList([...messageList, { author: 'bot', text: ('Hello') }]);
                return clearTimeout(timer);
                }, 1500);
            } else {
                setMessageList(messageList);
            }  
    }

    render() {
        return(
            <>
                     <ul>
                        {messageList.map(message =>
                            <li key={message.id}>{message.author}:{message.text}</li>)}
                    </ul >
                <Input change={handleChange} />
                <Button click={handleClick} />
                </>
            )
    }
}
// const Form = () => {

//     useEffect(() => {
//         const lastEl = messageList[messageList.length - 1]
//         if ( lastEl.author === 'you') {
//                 const timer = setTimeout(() => {
//                     setMessageList([...messageList, { author: 'bot', text: ('Hello') }]);
//                 return clearTimeout(timer);
//                 }, 1500);
//             } else {
//                 setMessageList(messageList);
//             }  
//     }, [messageList]);
    
    
//     return(
//     <>
//              <ul>
//                 {messageList.map(message =>
//                     <li key={message.id}>{message.author}:{message.text}</li>)}
//             </ul >
//         <Input change={handleChange} />
//         <Button click={handleClick} />
//         </>
//     )
       
// }

// export default Form;