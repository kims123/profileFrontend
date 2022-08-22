import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-game.css"

class FantasyRpgGameStatsLeft extends React.Component {

    render() {
        return (
            <div className="fantasy-rpg-table-stats">
                <h3 style={{textAlign: "center"}}>Stats </h3>
                <hr/>
                <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Name:</div>
                <div className="fantasy-rpg-stats-column">{this.props.characterName}</div>
                <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Class:</div>
                <div className="fantasy-rpg-stats-column">{this.props.characterClass}</div>
                <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Level:</div>
                <div className="fantasy-rpg-stats-column">{this.props.characterLevel}</div>
                <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Experience:</div>
                <div className="fantasy-rpg-stats-column">{this.props.characterExperience}</div>
            </div>
        )
    }
}

export default FantasyRpgGameStatsLeft