import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-game.css"
import imgDefault from "../../../image/no-go-clipart-11.jpg";

class FantasyRpgGameStatsLeft extends React.Component {

    render() {
        return (
            <div className="fantasy-rpg-table-stats-container">
                <div className="fantasy-rpg-table-stats">
                    <h3 className="fantasy-rpg-headline" style={{textAlign: "center"}}>Stats </h3>
                    <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Name:</div>
                    <div className="fantasy-rpg-stats-column">{this.props.characterName}</div>
                    <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Class:</div>
                    <div className="fantasy-rpg-stats-column">{this.props.characterClass}</div>
                    <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Level:</div>
                    <div className="fantasy-rpg-stats-column">{this.props.characterLevel}</div>
                    <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Experience:</div>
                    <div className="fantasy-rpg-stats-column">{this.props.characterExperience}</div>
                </div>
                <div>
                    <img src={this.props.characterImage} style={{width: "150px", height: "145px", padding: "5px"}}
                         alt={imgDefault}/>
                </div>
            </div>
        )
    }
}

export default FantasyRpgGameStatsLeft