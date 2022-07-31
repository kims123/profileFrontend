import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-button.css"

function FantasyRpgButton(props) {
    return (
        <button className="fantasy-rpg-menu-button" onClick={props.onClick}>{props.name}</button>
    )
}

export default FantasyRpgButton