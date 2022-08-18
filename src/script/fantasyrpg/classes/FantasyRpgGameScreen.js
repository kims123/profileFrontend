import React from "react";
import {properties} from "../resources/properties";
import FantasyRpgButton from "../component/FantasyRpgButton";
import "../../../css/fantasyrpg/fantasyrpg-game.css"

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
            <div>
                <div>
                    <h2>Game screen</h2>
                    <td className="fantasy-rpg-table">
                        <ul>
                            <p>Stats </p>
                            <hr />
                            <li>Name: {this.state.name}</li>
                            <li>Class: {this.state.class}</li>
                            <li>Level: {this.state.level}</li>
                            <li>Experience: {this.state.experience}</li>
                        </ul>
                    </td>
                </div>
                <div>
                    <FantasyRpgButton name="Back to start" color="green" onClick={this.props.backToStart}/>
                </div>
            </div>
        )
    }
}

export default FantasyRpgGameScreen