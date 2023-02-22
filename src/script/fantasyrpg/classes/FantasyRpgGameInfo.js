import React from "react";

import "../../../css/fantasyrpg/fantasyrpg-info.css"

class FantasyRpgGameInfo extends React.Component {

    state = {
        name: "",
        image: "",
        damageFrom: 0,
        damageTo: 0,
        health: 0,
        lastAttack: 0,
        playerAction: []
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        this.setState(props.nextMonster)
        this.setState({lastAttack: props.monsterAction});
        this.setState({playerAction: props.playerAction})
    }

    render() {
        return (
            <div className="fantasy-rpg-info">
                <p>-> {this.state.name} is attacking you for {this.state.lastAttack} damage.</p>
                <p>-> Mode: {this.state.playerAction.mode}. Damage: {this.state.playerAction.damage}</p>
            </div>
        )
    }
}

export default FantasyRpgGameInfo