import React from "react";
import "../../../css/button.css"

function Button(props) {
    return (
        <button style={{backgroundColor: props.backgroundColor}} className="menu-button" onClick={props.onClick}>{props.name} {props.nameto}</button>
    )
}

export default Button