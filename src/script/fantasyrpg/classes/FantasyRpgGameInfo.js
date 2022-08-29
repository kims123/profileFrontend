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
        let attackDamage = Math.floor(Math.random() * (props.nextMonster.damageTo - props.nextMonster.damageFrom + 1) + props.nextMonster.damageFrom);
        this.setState({lastAttack: attackDamage});
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