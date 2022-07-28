import React from "react";
import "../../css/button.css"

function Button(props) {
    return (
        <button className="action-button" onClick={props.onClick}>{props.name}</button>
    )
}

export default Button