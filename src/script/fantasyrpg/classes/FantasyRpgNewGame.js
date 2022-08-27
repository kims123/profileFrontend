import React from "react";
import FantasyRpgButton from "../component/FantasyRpgButton";
import {properties} from "../resources/properties";
import '../../../css/fantasyrpg/fantasyrpg-new.game.css'
import imgDefault from "../../../image/no-go-clipart-11.jpg";
import imgWarrior from "../../../image/warrior.png";
import imgMage from "../../../image/mage.png";
import imgPaladin from "../../../image/paladin.png";

class FantasyRpgStart extends React.Component {

    state = {
        warriorChosen: false,
        mageChosen: false,
        paladinChosen: false,
        characterName: "",
        characterClass: "",
        image: imgDefault
    }

    componentDidMount() {
        this.initialState = this.state
    }

    choseWarrior = () => {
        this.setState({warriorChosen: true})
        this.setState({mageChosen: false})
        this.setState({paladinChosen: false})
        this.setState({characterClass: "warrior"})
        this.setState({image: imgWarrior})
    }

    choseMage = () => {
        this.setState({warriorChosen: false})
        this.setState({mageChosen: true})
        this.setState({paladinChosen: false})
        this.setState({characterClass: "mage"})
        this.setState({image: imgMage})
    }

    chosePaladin = () => {
        this.setState({warriorChosen: false})
        this.setState({mageChosen: false})
        this.setState({paladinChosen: true})
        this.setState({characterClass: "paladin"})
        this.setState({image: imgPaladin})
    }

    changeName = e => {
        this.setState({characterName: e})
    }

    ableToCreateNewCharacter = () => {
        return (this.state.warriorChosen || this.state.mageChosen || this.state.paladinChosen)
            && this.state.characterName.length >= 3
    }

    handleSubmit = () => {

        //    Create character. Send til backend.

        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                characterName: this.state.characterName,
                characterClass: this.state.characterClass,
                token: localStorage.getItem("userToken")
            })
        }
        fetch(properties.hostUrl + "/createCharacter", requestOptions)
            .then(async response => {
                if (!response.ok) {
                    throw new Error(await response.text())
                }
                return response.text()
            })
            .then(resp => {
                this.props.characterName(this.state.characterName)
                this.setState(this.initialState)
            })
            .then(resp => {
                this.props.showStartMenu(false)
            })
            .catch(error => {
                if (error.message === 'Failed to fetch') {
                    document.getElementById("reg-character-msg").innerHTML = "Feil ved kontakt mot backend. Mest sannsynlig er service ikke på."
                } else {
                    document.getElementById("reg-character-msg").innerHTML = error
                }
            })
    }

    render() {
        return (
            <div className="fantasy-rpg-new-game-menu">
                <div style={{display: "inline-flex"}}>
                    <div>
                        <h3>Create character</h3>
                        <FantasyRpgButton name="Warrior" active={this.state.warriorChosen} onClick={this.choseWarrior}/>
                        <FantasyRpgButton name="Mage" active={this.state.mageChosen} onClick={this.choseMage}/>
                        <FantasyRpgButton name="Paladin" active={this.state.paladinChosen} onClick={this.chosePaladin}/>
                    </div>
                    <div className="fantasy-rpg-new-game-character-photo">
                        <img src={this.state.image} style={{width: "150px", height: "145px", padding: "5px"}} alt={imgDefault}/>
                    </div>
                </div>

                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.handleSubmit()
                    }}>
                        <p id="reg-character-msg">Infotekst for å opprette character</p>

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