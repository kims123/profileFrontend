import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-game.css"

class FantasyRpgGameStatsTop extends React.Component {

    state = {
        health: 10
    }

    render() {
        return (
            <div>
                <h3 className="fantasy-rpg-headline">Health: {this.state.health}</h3>
            </div>
        )
    }
}

export default FantasyRpgGameStatsTop