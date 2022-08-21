import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-game.css"

class FantasyRpgGameStats extends React.Component {

    render() {
        return (
            <div className="fantasy-rpg-table-stats">
                <td>
                    <ul>
                        <p>Stats </p>
                        <hr/>
                        <li>Name: {this.props.characterName}</li>
                        <li>Class: {this.props.characterClass}</li>
                        <li>Level: {this.props.characterLevel}</li>
                        <li>Experience: {this.props.characterExperience}</li>
                    </ul>
                </td>
            </div>
        )
    }
}

export default FantasyRpgGameStats