import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-game.css"
import FantasyRpgMonster from "./FantasyRpgMonster";
import FantasyRpgGameInfo from "./FantasyRpgGameInfo";

class FantasyRpgGameBoxCenter extends React.Component {

    render() {
        return (
            <div>
                <FantasyRpgMonster/>
                <FantasyRpgGameInfo />
            </div>
        )
    }
}

export default FantasyRpgGameBoxCenter