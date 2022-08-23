import React,{Component} from "react";

export class Input extends Component {

    render() {
        return <input type="text" className="input" onChange={this.props.handleChange} value={this.props.value}  />
    }
}