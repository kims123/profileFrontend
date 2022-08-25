import React from "react";
import "../../../css/fantasyrpg/fantasyrpg-game.css"
import FantasyRpgGameStatsTop from "./FantasyRpgGameStatsTop";
import FantasyRpgPlayerArea from "./FantasyRpgPlayerArea";
import FantasyRpgMonsterClass from "./FantasyRpgMonsterClass";
import FantasyRpgGameInfo from "./FantasyRpgGameInfo";

import img1 from "../../../image/8-cartoon-monster-vector-5-1.png";
import img2 from "../../../image/angry-monster-clipart-png-3.png";
import img3 from "../../../image/cartoon-monster-clipart-17.png";
import img4 from "../../../image/cute-monster-clipart-6.png";
import imgDefault from "../../../image/no-go-clipart-11.jpg";


class FantasyRpgGameBoxFull extends React.Component {

    state = {
        currentMonster: []
    }

    setMonster(monster) {
        this.setState({currentMonster: monster})
    }

    UNSAFE_componentWillReceiveProps = () => {
        this.setMonster(this.fetchNextMonster())
    }

    fetchNextMonster = () => {
        let number = Math.floor(Math.random() * 4) + 1;

        switch (number) {
            case 1:
                return this.monster1()
            case 2:
                return this.monster2()
            case 3:
                return this.monster3()
            case 4:
                return this.monster4()
            default:
                return this.monsterDefault()
        }
    }

    monster1 = () => {
        return {
            name: "Monster 1",
            image: img1,
            damageFrom: 1,
            damageTo: 3,
            health: 50
        }
    }

    monster2 = () => {
        return {
            name: "Monster 2",
            image: img2,
            damageFrom: 2,
            damageTo: 4,
            health: 70
        }
    }

    monster3 = () => {
        return {
            name: "Monster 3",
            image: img3,
            damageFrom: 3,
            damageTo: 6,
            health: 90
        }
    }

    monster4 = () => {
        return {
            name: "Monster 4",
            image: img4,
            damageFrom: 5,
            damageTo: 9,
            health: 140
        }
    }

    monsterDefault = () => {
        return {
            name: "Monster default",
            image: imgDefault,
            damageFrom: 55,
            damageTo: 99,
            health: 111
        }
    }

    render() {
        return (
            <div className="fantasy-rpg-game-box">
                <FantasyRpgGameStatsTop/>
                <hr/>

                <div style={{display: "flex"}}>
                    <FantasyRpgMonsterClass nextMonster={this.state.currentMonster}/>
                    <FantasyRpgGameInfo nextMonster={this.state.currentMonster}/>
                </div>
                <hr style={{margin: 0, marginTop: "10px"}}/>
                <FantasyRpgPlayerArea/>
            </div>
        )
    }
}

export default FantasyRpgGameBoxFull