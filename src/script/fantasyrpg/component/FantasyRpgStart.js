import React, {useState} from "react";
import '../../../css/VisAlleBrukere.css';
import FantasyRpgButton from "./FantasyRpgButton";
import FantasyRpgNewGame from "./FantasyRpgNewGame";
import FantasyRpgGameScreen from "./FantasyRpgGameScreen";

function FantasyRpgStart() {

    const [newGame, setNewGame] = useState(false)
    const [continueGame, setContinueGame] = useState(false)
    const [showStartMenu, setShowStartMenu] = useState(true)

    function hideMenu() {
        return newGame || continueGame
    }

    function changeShowStartMenu(e) {
        console.log("changeShowStartMenu: " + e)
        setShowStartMenu(e)
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
                    <FantasyRpgNewGame showStartMenu={changeShowStartMenu}/>
                </div>

                <div hidden={!continueGame}>
                    Continue game...
                </div>
            </div>

            <div hidden={showStartMenu}>
                <FantasyRpgGameScreen/>
            </div>

        </div>
    )
}

export default FantasyRpgStart