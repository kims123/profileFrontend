import React from "react";
import {properties} from "../resources/properties";
import "../../../css/fantasyrpg/fantasyrpg-game.css"

class FantasyRpgGameStatsTop extends React.Component {

    state = {
        health: 10
    }

    render() {
        return (
            <div>
                <h3>Health: {this.state.health}</h3>
            </div>
        )
    }
}

export default FantasyRpgGameStatsTop