import React, { Component } from "react";

export class Message extends Component {
    render() {
        return <h1 className="message">{this.props.name }</h1>
    }
}