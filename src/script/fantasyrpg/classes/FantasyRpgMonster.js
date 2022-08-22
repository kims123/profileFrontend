import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-monster.css"

class FantasyRpgMonster extends React.Component {

    render() {
        return (
            <div>
                <div className="fantasy-rpg-monster">
                    Monster
                </div>
                <div className="fantasy-rpg-monster-status">
                    Health: 100
                </div>
            </div>
        )
    }
}

export default FantasyRpgMonster