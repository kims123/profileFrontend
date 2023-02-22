import React from "react";
import imgDefault from "../../../image/no-go-clipart-11.jpg";
import "../../../css/fantasyrpg/fantasyrpg-monster.css"

class FantasyRpgMonsterClass extends React.Component {

    state = {
        name: "",
        image: "",
        damageFrom: 0,
        damageTo: 0,
        health: 0
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        this.setState(props.nextMonster)
    }

    render() {
        return (
            <div>
                <div className="fantasy-rpg-monster-name">
                    {this.state.name}
                </div>
                <div className="fantasy-rpg-monster">
                    <img src={this.state.image} style={{width: "150px", height: "145px", padding: "5px"}} alt={imgDefault}/>
                </div>
                <div className="fantasy-rpg-monster-status">
                    <strong>HP:</strong> {this.state.health}/{this.state.healthStart}. <br/>
                    <hr style={{margin: "0"}} />
                    <strong>Dmg:</strong> {this.state.damageFrom} - {this.state.damageTo}
                </div>
            </div>
        )
    }
}

export default FantasyRpgMonsterClass