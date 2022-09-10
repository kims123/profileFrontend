import React from "react";
import {TicTacToeStart} from "./TicTacToeStart";

function Tictactoe() {
    return <div className="tictactoe-container">
        <h2 style={{textDecoration: "underline", textAlign: "center"}}>Tic-tac-toe</h2>
        <TicTacToeStart />
    </div>
}

export default Tictactoe