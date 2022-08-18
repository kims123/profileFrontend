import React from "react";
import "../../../css/button.css"

function ActionButtonRed (props) {
    return (
        <button className="action-button-red" onClick={props.onClick}>{props.name}</button>
    )
}

export default ActionButtonRed