import React from "react";
import '../../../css/VisAlleBrukere.css';
import FantasyRpgStart from "./FantasyRpgStart";
import "../../../css/fantasyrpg/fantasyrpg-main.css"

function FantasyRpg() {
    return (
        <div className="fantasy-rpg-container">
            <h2 style={{textDecoration: "underline"}}>Fantasy RPG</h2>
            <FantasyRpgStart />
        </div>
    )
}

export default FantasyRpg