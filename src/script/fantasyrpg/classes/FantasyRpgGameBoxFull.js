import React from "react";
import {properties} from "../resources/properties";
import "../../../css/fantasyrpg/fantasyrpg-game.css"
import FantasyRpgGameStatsTop from "./FantasyRpgGameStatsTop";
import FantasyRpgGameBoxCenter from "./FantasyRpgGameBoxCenter";

class FantasyRpgGameBoxFull extends React.Component {

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
            <div className="fantasy-rpg-game-box">
                <FantasyRpgGameStatsTop/>
                <hr/>

                <FantasyRpgGameBoxCenter />

            </div>
        )
    }
}

export default FantasyRpgGameBoxFull