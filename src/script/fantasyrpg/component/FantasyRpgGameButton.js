import React, {useEffect, useState} from "react";
import "../../../css/fantasyrpg/fantasyrpg-game-button.css"

function FantasyRpgGameButton(props) {

    let deactivatedButton = "fantasy-rpg-game-button-deactive"
    let fantasyButton = "fantasy-rpg-game-button"

    const [currentStyleClass, setCurrentStyleClass] = useState(deactivatedButton)

    useEffect(() => {
        if (props.active) {
            setCurrentStyleClass(fantasyButton)
        } else {
            setCurrentStyleClass(fantasyButton + " " + deactivatedButton)
        }
    }, [fantasyButton, deactivatedButton, props.active, props.name])

    return (
        <button className={currentStyleClass} onClick={props.onClick}>{props.name}</button>
    )
}

export default FantasyRpgGameButton