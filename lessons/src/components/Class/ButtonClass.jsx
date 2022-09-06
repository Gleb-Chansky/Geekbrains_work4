import React,{Component} from "react";

export class Button extends Component {
    render() {
        return <button type="submit" className="button" onClick={this.props.handleClick}> Send</button >
    }
}