import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-game.css"

class FantasyRpgGameStatsTop extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fantasy-rpg-headline">Health: {this.props.characterHealth}</h3>
            </div>
        )
    }
}

export default FantasyRpgGameStatsTop