import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-player.css"
import Button from "../../profile/component/Button";

class FantasyRpgPlayerArea extends React.Component {

    render() {
        return (
            <div style={{display: "flex"}}>
                <div className="fantasy-rpg-player-buttons">
                    <div>
                        <Button name="Choise 1"/>
                        <Button name="Choise 2"/>
                        <Button name="Choise 3"/>
                    </div>
                    <div>
                        <Button name="Flee"/>
                    </div>
                </div>
                <div className="fantasy-rpg-player-info">
                        <h3 style={{textAlign: "center"}}>Items</h3>
                        <hr/>
                        <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Head:</div>
                        <div className="fantasy-rpg-stats-column">Head level 1. Defence +1</div>
                        <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Chest:</div>
                        <div className="fantasy-rpg-stats-column">Chest level 2. Defence +2</div>
                        <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Shoulders:</div>
                        <div className="fantasy-rpg-stats-column">Shoulders level 1. Def +3</div>
                        <div className="fantasy-rpg-stats-column" style={{fontWeight: "bold"}}>Weapon:</div>
                        <div className="fantasy-rpg-stats-column">Sword. Dmg +2</div>
                </div>
            </div>
        )
    }
}

export default FantasyRpgPlayerArea