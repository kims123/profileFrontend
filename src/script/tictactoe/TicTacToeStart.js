import '../../css/tictactoe/tictactoe-start.css'
import {useEffect, useState} from "react";

export function TicTacToeStart() {

    const [playerButtons, setPlayerButtons] = useState([])
    const [computerButtons, setComputerButtons] = useState([])

    useEffect(() => {
        if (playerWon()) {
            document.getElementById("tictactoe-status-text").innerText = "The winner is player!"
        } else if (computerWon()) {
            document.getElementById("tictactoe-status-text").innerText = "The winner is computer!"
        } else if (playerButtons.length + computerButtons.length === 9) {
            document.getElementById("tictactoe-status-text").innerText = "It is a draw!"
        } else if (playerButtons.length !== 0 && playerButtons.length + computerButtons.length !== 9) {
            computerTurn()
        }
    }, [playerButtons]);

    function wincondition1(list) {
        const winValues = [1, 2, 3]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function wincondition2(list) {
        const winValues = [4, 5, 6]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function wincondition3(list) {
        const winValues = [7, 8, 9]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function wincondition4(list) {
        const winValues = [1, 4, 7]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function wincondition5(list) {
        const winValues = [2, 5, 8]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function wincondition6(list) {
        const winValues = [3, 6, 9]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function wincondition7(list) {
        const winValues = [1, 5, 9]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function wincondition8(list) {
        const winValues = [3, 5, 7]
        return winValues.every(value => {
            return list.includes(value)
        });
    }

    function playerWon() {
        if (wincondition1(playerButtons)) {
            return true;
        }
        if (wincondition2(playerButtons)) {
            return true;
        }
        if (wincondition3(playerButtons)) {
            return true;
        }
        if (wincondition4(playerButtons)) {
            return true;
        }
        if (wincondition5(playerButtons)) {
            return true;
        }
        if (wincondition6(playerButtons)) {
            return true;
        }
        if (wincondition7(playerButtons)) {
            return true;
        }
        if (wincondition8(playerButtons)) {
            return true;
        }
    }

    function computerWon() {
        if (wincondition1(computerButtons)) {
            return true;
        }
        if (wincondition2(computerButtons)) {
            return true;
        }
        if (wincondition3(computerButtons)) {
            return true;
        }
        if (wincondition4(computerButtons)) {
            return true;
        }
        if (wincondition5(computerButtons)) {
            return true;
        }
        if (wincondition6(computerButtons)) {
            return true;
        }
        if (wincondition7(computerButtons)) {
            return true;
        }
        if (wincondition8(computerButtons)) {
            return true;
        }
    }

    function draw() {
    }


    function button1pressed() {
        return playerButtons.includes(1) || computerButtons.includes(1)
    }

    function button2pressed() {
        return playerButtons.includes(2) || computerButtons.includes(2)
    }

    function button3pressed() {
        return playerButtons.includes(3) || computerButtons.includes(3)
    }

    function button4pressed() {
        return playerButtons.includes(4) || computerButtons.includes(4)
    }

    function button5pressed() {
        return playerButtons.includes(5) || computerButtons.includes(5)
    }

    function button6pressed() {
        return playerButtons.includes(6) || computerButtons.includes(6)
    }

    function button7pressed() {
        return playerButtons.includes(7) || computerButtons.includes(7)
    }

    function button8pressed() {
        return playerButtons.includes(8) || computerButtons.includes(8)
    }

    function button9pressed() {
        return playerButtons.includes(9) || computerButtons.includes(9)
    }

    function button1Value() {
        if (playerButtons.includes(1)) {
            return "X"
        }
        if (computerButtons.includes(1)) {
            return "O"
        }
        return ""
    }

    function button2Value() {
        if (playerButtons.includes(2)) {
            return "X"
        }
        if (computerButtons.includes(2)) {
            return "O"
        }
        return ""
    }

    function button3Value() {
        if (playerButtons.includes(3)) {
            return "X"
        }
        if (computerButtons.includes(3)) {
            return "O"
        }
        return ""
    }

    function button4Value() {
        if (playerButtons.includes(4)) {
            return "X"
        }
        if (computerButtons.includes(4)) {
            return "O"
        }
        return ""
    }

    function button5Value() {
        if (playerButtons.includes(5)) {
            return "X"
        }
        if (computerButtons.includes(5)) {
            return "O"
        }
        return ""
    }

    function button6Value() {
        if (playerButtons.includes(6)) {
            return "X"
        }
        if (computerButtons.includes(6)) {
            return "O"
        }
        return ""
    }

    function button7Value() {
        if (playerButtons.includes(7)) {
            return "X"
        }
        if (computerButtons.includes(7)) {
            return "O"
        }
        return ""
    }

    function button8Value() {
        if (playerButtons.includes(8)) {
            return "X"
        }
        if (computerButtons.includes(8)) {
            return "O"
        }
        return ""
    }

    function button9Value() {
        if (playerButtons.includes(9)) {
            return "X"
        }
        if (computerButtons.includes(9)) {
            return "O"
        }
        return ""
    }

    const pressButton1 = () => {
        if (!button1pressed()) {
            updatePlayerList(1)
        }
    }

    const pressButton2 = () => {
        if (!button2pressed()) {
            updatePlayerList(2)
        }
    }
    const pressButton3 = () => {
        if (!button3pressed()) {
            updatePlayerList(3)
        }
    }
    const pressButton4 = () => {
        if (!button4pressed()) {
            updatePlayerList(4)
        }
    }
    const pressButton5 = () => {
        if (!button5pressed()) {
            updatePlayerList(5)
        }
    }
    const pressButton6 = () => {
        if (!button6pressed()) {
            updatePlayerList(6)
        }
    }
    const pressButton7 = () => {
        if (!button7pressed()) {
            updatePlayerList(7)
        }
    }
    const pressButton8 = () => {
        if (!button8pressed()) {
            updatePlayerList(8)
        }
    }
    const pressButton9 = () => {
        if (!button9pressed()) {
            updatePlayerList(9)
        }
    }

    function updateComputerList(number) {
        let computerButtonsValues = [...computerButtons]
        computerButtonsValues.push(number)
        setComputerButtons(computerButtonsValues)
    }

    function updatePlayerList(number) {
        let playerButtonsValues = [...playerButtons]
        playerButtonsValues.push(number)
        setPlayerButtons(playerButtonsValues)
    }

    const computerTurn = () => {
        console.log("Computer - Thinking...")
        while (true) {
            let buttonNumber = Math.floor(Math.random() * (9) + 1);
            console.log("Computer - Can I press " + buttonNumber + "?")
            console.log(computerButtons)
            switch (buttonNumber) {
                case 1: {
                    if (button1pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(1)
                    return
                }
                case 2: {
                    if (button2pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(2)
                    return
                }
                case 3: {
                    if (button3pressed) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(3)
                    return
                }
                case 4: {
                    if (button4pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(4)
                    return
                }
                case 5: {
                    if (button5pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(5)
                    return
                }
                case 6: {
                    if (button6pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(6)
                    return
                }
                case 7: {
                    if (button7pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(7)
                    return
                }
                case 8: {
                    if (button8pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(8)
                    return
                }
                case 9: {
                    if (button9pressed()) {
                        continue
                    }
                    console.log("Computer - Yes I can. Pressing " + buttonNumber + ".")
                    updateComputerList(9)
                    return
                }
                default: {
                    console.log("Computer - Havnet på default")
                }
            }
        }
    }

    return (
        <div>
            <div className="tictactoe-start-container">
                <button className="tictactoe-start-grid-item" value="1"
                        onClick={() => pressButton1()}>{button1Value()}</button>
                <button className="tictactoe-start-grid-item" value="2"
                        onClick={() => pressButton2()}>{button2Value()}</button>
                <button className="tictactoe-start-grid-item" value="3"
                        onClick={() => pressButton3()}>{button3Value()}</button>
                <button className="tictactoe-start-grid-item" value="4"
                        onClick={() => pressButton4()}>{button4Value()}</button>
                <button className="tictactoe-start-grid-item" value="5"
                        onClick={() => pressButton5()}>{button5Value()}</button>
                <button className="tictactoe-start-grid-item" value="6"
                        onClick={() => pressButton6()}>{button6Value()}</button>
                <button className="tictactoe-start-grid-item" value="7"
                        onClick={() => pressButton7()}>{button7Value()}</button>
                <button className="tictactoe-start-grid-item" value="8"
                        onClick={() => pressButton8()}>{button8Value()}</button>
                <button className="tictactoe-start-grid-item" value="9"
                        onClick={() => pressButton9()}>{button9Value()}</button>
            </div>
            <p id="tictactoe-status-text" style={{textAlign: "center"}}>Who will be the winner d(◉◡◉)b</p>

        </div>
    )
}