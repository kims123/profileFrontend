import React, {useEffect, useRef, useState} from "react";
import "../../../css/fantasyrpg/fantasyrpg-button.css"

function FantasyRpgButton(props) {

    let activeButt = "fantasy-rpg-menu-button-active"
    let deactiveButt = "fantasy-rpg-menu-button"

    const [currentStyleClass, setCurrentStyleClass] = useState(deactiveButt)


    useEffect(() => {
        if(props.active) {
            setCurrentStyleClass(activeButt)
        } else {
            setCurrentStyleClass(deactiveButt)
        }
    }, [activeButt, deactiveButt, props.active, props.name])


    return (
        <button className={currentStyleClass} onClick={props.onClick}>{props.name}</button>
    )
}

export default FantasyRpgButton