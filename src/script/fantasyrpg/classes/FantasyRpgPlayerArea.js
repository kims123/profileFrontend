import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-player.css"
import FantasyRpgGameButton from "../component/FantasyRpgGameButton";

class FantasyRpgPlayerArea extends React.Component {


    attack1 = () => {
        let attackDamage = Math.floor(Math.random() * (this.props.characterWeaponDamageTo - this.props.characterWeaponDamageFrom + 1) + this.props.characterWeaponDamageFrom);
        let att = {
            mode: "Melee",
            damage: attackDamage
        }

        this.props.actionPlayer(att)
    }

    skill1 = () => {
        let attackDamage = Math.floor(Math.random() * (this.props.characterWeaponDamageTo + 4 - this.props.characterWeaponDamageFrom + 5) + this.props.characterWeaponDamageFrom + 4);
        let att = {
            mode: "Skill",
            damage: attackDamage
        }

        this.props.actionPlayer(att)
    }

    skill2 = () => {
        let attackDamage = Math.floor(Math.random() * (20) + 1);
        let att = {
            mode: "Skill",
            damage: attackDamage
        }

        this.props.actionPlayer(att)
    }

    render() {
        return (
            <div style={{display: "flex", borderTop: "2px solid black", paddingTop: "10px", marginTop: "10px"}}>
                <div className="fantasy-rpg-player-buttons">
                    <div>
                        <FantasyRpgGameButton name="Attack" active={true} onClick={this.attack1}/>
                        <FantasyRpgGameButton name="Skill 1" active={true} onClick={this.skill1}/>
                        <FantasyRpgGameButton name="Skill 2" active={true} onClick={this.skill2}/>
                    </div>
                    <div>
                        <FantasyRpgGameButton name="Flee" active={false}/>
                    </div>
                </div>

                <div className="fantasy-rpg-player-info">
                    <h3 style={{textAlign: "center"}}>Items</h3>
                    <div className="fantasy-rpg-items-column" style={{fontWeight: "bold"}}>Head:</div>
                    <div className="fantasy-rpg-items-column">{this.props.characterHeadName}.
                        Defence: {this.props.characterHeadDefence}</div>
                    <div className="fantasy-rpg-items-column" style={{fontWeight: "bold"}}>Chest:</div>
                    <div className="fantasy-rpg-items-column">{this.props.characterChestName}.
                        Defence: {this.props.characterChestDefence}</div>
                    <div className="fantasy-rpg-items-column" style={{fontWeight: "bold"}}>Shoulders:</div>
                    <div className="fantasy-rpg-items-column">{this.props.characterShouldersName}.
                        Defence: {this.props.characterChestDefence}</div>
                    <div className="fantasy-rpg-items-column" style={{fontWeight: "bold"}}>Weapon:</div>
                    <div className="fantasy-rpg-items-column">{this.props.characterWeaponName}.
                        Damage: {this.props.characterWeaponDamageFrom} - {this.props.characterWeaponDamageTo}</div>
                </div>
            </div>
        )
    }
}

export default FantasyRpgPlayerArea