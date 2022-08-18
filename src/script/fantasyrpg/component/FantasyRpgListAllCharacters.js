import React, {useEffect, useState} from "react";
import {properties} from "../resources/properties";
import "../../../css/fantasyrpg/fantasyrpg-list-all-characters.css"

function FantasyRpgStart(props) {

    const [allCharacters, setAllCharacters] = useState([])

    useEffect(() => {
        console.log(props.seed)
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
                <h2>Characters list</h2>
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
                            <tr key={character.characterName}>
                                <td className="td-link" onClick={() => playCharacter(character.characterName)}>{character.characterName.toString()}</td>
                                <td>{character.characterClass}</td>
                                <td>{character.level}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*<div className="child-component"*/}
            {/*     hidden={!showProfileInfo}>*/}
            {/*    <ProfilInfo highlightedUser={getHighlightedUser()}/>*/}
            {/*    <ActionButton name="Lukk" onClick={() => setShowProfileInfo(false)}></ActionButton>*/}
            {/*</div>*/}
        </div>
    )
}

export default FantasyRpgStart