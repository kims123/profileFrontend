import React from "react";
import {properties} from "../resources/properties";
import FantasyRpgButton from "../component/FantasyRpgButton";
import "../../../css/fantasyrpg/fantasyrpg-game.css"
import FantasyRpgGameBox from "./FantasyRpgGameBox";
import FantasyRpgGameStats from "./FantasyRpgGameStats";

class FantasyRpgGameScreen extends React.Component {

    state = {
        name: "",
        class: "",
        level: 0,
        experience: 0
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
            })
            .catch(reason => document.getElementById("reg-character-msg").innerHTML = reason)
    }

    render() {
        return (
            <div className="fantasy-rpg-game-screen-container">
                <h2>Game screen</h2>
                <div className="fantasy-rpg-game-screen">
                    <FantasyRpgGameStats
                        characterName={this.state.name}
                        characterClass={this.state.class}
                        characterLevel={this.state.level}
                        characterExperience={this.state.experience}/>
                    <FantasyRpgGameBox/>
                </div>
            </div>
        )
    }
}

export default FantasyRpgGameScreen