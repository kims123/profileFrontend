import React from "react";
import {propertiesFantasy} from "../resources/properties-fantasy";
import "../../../css/fantasyrpg/fantasyrpg-game.css"
import FantasyRpgGameBoxFull from "./FantasyRpgGameBoxFull";
import FantasyRpgGameStatsLeft from "./FantasyRpgGameStatsLeft";

import imgWarrior from "../../../image/warrior.png";
import imgMage from "../../../image/mage.png";
import imgPaladin from "../../../image/paladin.png";

class FantasyRpgGameScreen extends React.Component {

    state = {
        name: "",
        class: "",
        level: 990,
        experience: 990,
        characterWeaponName: "",
        characterWeaponDamageFrom: 990,
        characterWeaponDamageTo: 990,
        characterHealth: 990,
        characterHealthStart: 999,
        characterHeadName: "",
        characterHeadDefence: 990,
        characterShouldersName: "",
        characterShouldersDefence: 990,
        characterChestName: "",
        characterChestDefence: 990,
    }

    changeHealth = (e) => {
        this.setState({characterHealth: e})
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        if (props.refresh === true) {
            this.fetchCharacterData(props.characterName)
        }
    }

    fetchCharacterData(characterName) {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                characterName: characterName,
                token: localStorage.getItem("userToken")
            })
        }
        fetch(propertiesFantasy.hostUrl + "/getCharacter", requestOptions)
            .then(response => {
                return response.json()
            })
            .then(character => {
                this.setState({name: character.characterName})
                this.setState({class: character.characterClass})
                this.setState({level: character.level})
                this.setState({experience: character.experience})
                this.setState({characterWeaponName: character.characterWeaponName})
                this.setState({characterWeaponDamageFrom: character.characterWeaponDamageFrom})
                this.setState({characterWeaponDamageTo: character.characterWeaponDamageTo})
                this.setState({characterHealth: character.characterHealth})
                this.setState({characterHealthStart: character.characterHealth})
                this.setState({characterHeadName: character.characterHeadName})
                this.setState({characterHeadDefence: character.characterHeadDefence})
                this.setState({characterShouldersName: character.characterShouldersName})
                this.setState({characterShouldersDefence: character.characterShouldersDefence})
                this.setState({characterChestName: character.characterChestName})
                this.setState({characterChestDefence: character.characterChestDefence})

                if (character.characterClass === "Warrior") {
                    this.setState({image: imgWarrior})
                } else if (character.characterClass === "Mage") {
                    this.setState({image: imgMage})
                } else if (character.characterClass === "Paladin") {
                    this.setState({image: imgPaladin})
                }
            })
            .catch(reason => document.getElementById("reg-character-msg").innerHTML = reason)
    }

    render() {
        return (
            <div className="fantasy-rpg-game-screen-container">
                <div className="fantasy-rpg-game-screen">
                    <FantasyRpgGameStatsLeft
                        characterName={this.state.name}
                        characterClass={this.state.class}
                        characterLevel={this.state.level}
                        characterExperience={this.state.experience}
                        characterImage={this.state.image}/>
                    <FantasyRpgGameBoxFull
                        characterWeaponName={this.state.characterWeaponName.toString()}
                        characterWeaponDamageFrom={this.state.characterWeaponDamageFrom}
                        characterWeaponDamageTo={this.state.characterWeaponDamageTo}
                        characterHealth={this.state.characterHealth}
                        characterHealthStart={this.state.characterHealthStart}
                        changeHealth={this.changeHealth}
                        characterHeadName={this.state.characterHeadName}
                        characterHeadDefence={this.state.characterHeadDefence}
                        characterShouldersName={this.state.characterShouldersName}
                        characterShouldersDefence={this.state.characterShouldersDefence}
                        characterChestName={this.state.characterChestName}
                        characterChestDefence={this.state.characterChestDefence}
                        characterImage={this.state.image}/>
                </div>
            </div>
        )
    }
}

export default FantasyRpgGameScreen