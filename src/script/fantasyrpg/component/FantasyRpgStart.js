import React, {useState} from "react";
import '../../../css/VisAlleBrukere.css';
import FantasyRpgButton from "./FantasyRpgButton";
import FantasyRpgNewGame from "./FantasyRpgNewGame";

function FantasyRpgStart() {

    const [newGame, setNewGame] = useState(false)
    const [continueGame, setContinueGame] = useState(false)

    function hideMenu() {
        return newGame || continueGame
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
            <div hidden={hideMenu()}>
                <FantasyRpgButton name="New game" color="green" onClick={startNewGame}/>
                <FantasyRpgButton name="Continue" color="green" onClick={startContinueGame}/>
            </div>

            <div hidden={!newGame}>
                <FantasyRpgNewGame/>
            </div>

            <div hidden={!continueGame}>
                Continue game...
            </div>

        </div>
    )
}

export default FantasyRpgStart