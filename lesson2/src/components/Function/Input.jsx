import React from "react";

export const Input = (props) => {
    return <input type="text" className="input" value={props.message} onChange={props.change}/>
}
