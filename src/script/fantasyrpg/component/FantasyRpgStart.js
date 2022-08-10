import React, {useState} from "react";
import '../../../css/VisAlleBrukere.css';
import FantasyRpgButton from "./FantasyRpgButton";
import FantasyRpgNewGame from "./FantasyRpgNewGame";
import FantasyRpgGameScreen from "./FantasyRpgGameScreen";

function FantasyRpgStart() {

    const [newGame, setNewGame] = useState(false)
    const [continueGame, setContinueGame] = useState(false)
    const [showStartMenu, setShowStartMenu] = useState(true)
    const [characterName, setCharacterName] = useState("default name")

    function hideMenu() {
        return newGame || continueGame
    }

    function changeShowStartMenu(e) {
        setShowStartMenu(e)
    }

    function changeCharacterName(e) {
        console.log("Endrer charactername: " + e)
        setCharacterName(e)
    }

    const startNewGame = () => {
        setNewGame(true)
        setContinueGame(false)
    }

    const startContinueGame = () => {
        setNewGame(false)
        setContinueGame(true)
    }

    return (
        <div>
            <div hidden={!showStartMenu}>
                <div hidden={hideMenu()}>
                    <FantasyRpgButton name="New game" color="green" onClick={startNewGame}/>
                    <FantasyRpgButton name="Continue" color="green" onClick={startContinueGame}/>
                </div>

                <div hidden={!newGame}>
                    <FantasyRpgNewGame showStartMenu={changeShowStartMenu} characterName={changeCharacterName}/>
                </div>

                <div hidden={!continueGame}>
                    Continue game...
                </div>
            </div>

            <div hidden={showStartMenu}>
                <FantasyRpgGameScreen characterName={characterName}/>
            </div>

        </div>
    )
}

export default FantasyRpgStart