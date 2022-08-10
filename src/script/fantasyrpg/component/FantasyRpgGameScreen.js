import React from "react";
import {properties} from "../properties";

class FantasyRpgGameScreen extends React.Component {

    state = {
        name: "",
        class: "",
        level: 0
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                characterName: props.characterName,
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
            })
            .catch(reason => document.getElementById("reg-character-msg").innerHTML = reason)
    }


    render() {
        return (
            <div>
                <h2>Game screen</h2>
                <p>Name: {this.state.name}</p>
                <p>Class: {this.state.class}</p>
                <p>Level: {this.state.level}</p>
            </div>
        )
    }
}

export default FantasyRpgGameScreen