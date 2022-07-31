import React from "react";
import FantasyRpgButton from "./FantasyRpgButton";

class FantasyRpgStart extends React.Component {

    state = {
        warriorChosen: false,
        mageChosen: false,
        paladinChosen: false,
        characterName: ""
    }

    choseWarrior = () => {
        this.setState({warriorChosen: true})
        this.setState({mageChosen: false})
        this.setState({paladinChosen: false})
    }

    choseMage = () => {
        this.setState({warriorChosen: false})
        this.setState({mageChosen: true})
        this.setState({paladinChosen: false})
    }

    chosePaladin = () => {
        this.setState({warriorChosen: false})
        this.setState({mageChosen: false})
        this.setState({paladinChosen: true})
    }

    changeName = e => {
        this.setState({characterName: e})
    }

    ableToCreateNewCharacter = () => {
        return (this.state.warriorChosen || this.state.mageChosen || this.state.paladinChosen)
            && this.state.characterName.length >= 3
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Create character</h3>
                    <FantasyRpgButton name="Warrior" active={this.state.warriorChosen} onClick={this.choseWarrior}/>
                    <FantasyRpgButton name="Mage" active={this.state.mageChosen} onClick={this.choseMage}/>
                    <FantasyRpgButton name="Paladin" active={this.state.paladinChosen} onClick={this.chosePaladin}/>
                </div>

                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.handleSubmit()
                    }}>
                        <p id="reg-bruker-msg">Infotekst for registrer bruker</p>

                        <label>Name: </label><br/>
                        <input type="text" value={this.state.characterName} required onChange={(e) => {
                            this.changeName(e.target.value)
                        }}/>
                        <br/>

                        <button disabled={!this.ableToCreateNewCharacter()} type="submit"
                                className="menu-button">Create
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FantasyRpgStart