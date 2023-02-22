import React, {useEffect, useState} from "react";
import {properties} from "../resources/properties";
import "../../../css/fantasyrpg/fantasyrpg-list-all-characters.css"

function FantasyRpgStart(props) {

    const [allCharacters, setAllCharacters] = useState([])

    useEffect(() => {
        if (props.refresh) {
            fetchUserData()
        }
    }, [props])

    const fetchUserData = () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }
        fetch(properties.hostUrl + "/getAllCharacters", requestOptions)
            .then(async response => {
                if (!response.ok) {
                    throw new Error(await response.text())
                }

                return response.json()
            })
            .then(characters => {
                setAllCharacters(characters)
                if(characters.length === 0) {
                    document.getElementById("all-character-msg").innerHTML = "You dont have any characters"
                } else {
                    document.getElementById("all-character-msg").innerHTML = ""
                }
            })
            .catch(reason => {
                document.getElementById("all-character-msg").innerHTML = reason
            })
    }

    function playCharacter(character) {
        props.continueGame(character)
    }


    return (
        <div className="parent-component-fantasyrpg-allcharacters">
            <div className="child-component-fantasyrpg-allcharacters">
                <h2>Your characters</h2>
                <p id="all-character-msg"></p>

                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Level</th>
                        </tr>
                        </thead>
                        <tbody>
                        {allCharacters.map((character) => (
                            <tr key={character.characterName} className="td-link" onClick={() => playCharacter(character.characterName)}>
                                <td>{character.characterName.toString()}</td>
                                <td>{character.characterClass}</td>
                                <td>{character.level}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FantasyRpgStart