import React from "react";

export const Input = (props) => {
    return <input type="text" className="input" value={props.value} onChange={props.change}/>
}
