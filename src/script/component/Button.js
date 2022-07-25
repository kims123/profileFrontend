import React from "react";
import "../../css/button.css"

function Button(props) {
    return (
        <button className="menu-button" onClick={props.onClick}>{props.nameone} {props.nameto}</button>
    )
}

export default Button