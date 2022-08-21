import React, {useState} from "react";
import FantasyRpgButton from "./FantasyRpgButton";
import FantasyRpgNewGame from "../classes/FantasyRpgNewGame";
import FantasyRpgGameScreen from "../classes/FantasyRpgGameScreen";
import FantasyRpgListAllCharacters from "./FantasyRpgListAllCharacters";
import '../../../css/VisAlleBrukere.css';
import '../../../css/fantasyrpg/fantasyrpg-start.css'

function FantasyRpgStart() {

    const [newGame, setNewGame] = useState(false)
    const [continueGame, setContinueGame] = useState(false)
    const [showStartMenu, setShowStartMenu] = useState(true)
    const [characterName, setCharacterName] = useState("default name")
    const [showAllCharacters, setShowAllCharacters] = useState(true);

    function hideMenu() {
        return newGame || continueGame
    }

    function changeShowStartMenu(e) {
        setShowStartMenu(e)
    }

    function changeCharacterName(e) {
        setCharacterName(e)
    }

    const startNewGame = () => {
        setNewGame(true)
        setContinueGame(false)
        setShowAllCharacters(false)
    }

    const startContinueGame = () => {
        setNewGame(false)
        setContinueGame(true)
        setShowAllCharacters(false)
    }

    const backToStart = () => {
        setShowStartMenu(true)
        setNewGame(false)
        setContinueGame(false)
        setShowAllCharacters(true)
    }

    const showContinueGame = (character) => {
        setCharacterName(character)
        setShowStartMenu(false)
        setContinueGame(true)
    }

    return (
        <div>
            <div hidden={!showStartMenu}>
                <div hidden={hideMenu()} className="fantasy-rpg-start-menu">
                    <FantasyRpgButton name="New game" color="green" onClick={startNewGame}/>
                    <FantasyRpgButton name="Continue last save" color="green" onClick={startContinueGame}/>

                    <FantasyRpgListAllCharacters refresh={showAllCharacters} continueGame={showContinueGame}/>
                </div>

                <div hidden={!newGame}>
                    <FantasyRpgNewGame showStartMenu={changeShowStartMenu} backToStart={backToStart} characterName={changeCharacterName}/>
                </div>

                <div hidden={!continueGame}>
                    <FantasyRpgGameScreen characterName={characterName} backToStart={backToStart} refresh={!showStartMenu}/>
                </div>
            </div>

            <div hidden={showStartMenu}>
                <FantasyRpgGameScreen characterName={characterName} backToStart={backToStart} refresh={!showStartMenu}/>
            </div>


            <div>
                <FantasyRpgButton name="Back to start" color="green" onClick={backToStart}/>
            </div>
        </div>
    )
}

export default FantasyRpgStart