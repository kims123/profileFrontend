import React from "react";
import {properties} from "../resources/properties";
import "../../../css/fantasyrpg/fantasyrpg-game.css"
import FantasyRpgGameBoxFull from "./FantasyRpgGameBoxFull";
import FantasyRpgGameStatsLeft from "./FantasyRpgGameStatsLeft";

import imgWarrior from "../../../image/warrior.png";
import imgMage from "../../../image/mage.png";
import imgPaladin from "../../../image/paladin.png";
import imgDefault from "../../../image/no-go-clipart-11.jpg";

class FantasyRpgGameScreen extends React.Component {

    state = {
        name: "",
        class: "",
        level: 0,
        experience: 0,
        image: imgDefault
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
        fetch(properties.hostUrl + "/getCharacter", requestOptions)
            .then(response => {
                return response.json()
            })
            .then(character => {
                this.setState({name: character.characterName})
                this.setState({class: character.characterClass})
                this.setState({level: character.level})
                this.setState({experience: character.experience})

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
                    <FantasyRpgGameBoxFull/>
                </div>
            </div>
        )
    }
}

export default FantasyRpgGameScreen