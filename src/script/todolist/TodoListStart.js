import React from "react";
import '../../css/VisAlleBrukere.css';
import "../../css/fantasyrpg/fantasyrpg-main.css"
import {properties} from "./resources/properties";

class TodoListStart extends React.Component {

    state = {
        inputText: ""
    }

    changeInputText = e => {
        this.setState({inputText: e})
    }

    ableToAddToDoText = () => {
        return this.state.inputText.length >= 3
    }

    handleSubmit = () => {
        let requestOptions
        requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                todoElement: this.state.inputText,
                token: localStorage.getItem("userToken")
            })
        }

        fetch(properties.hostUrl + "/addTodo", requestOptions)
            .then(async response => {
                if (!response.ok) {
                    throw new Error(await response.text())
                }
                return response.text()
            })
            .then(() => {
                this.setState({inputText: ""})
            })
            .then(() => {
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
            <div style={{display: "inline"}}>
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.handleSubmit()
                    }}>
                        <label>Todo: </label><br/>
                        <input type="text" value={this.state.inputText} required onChange={(e) => {
                            this.changeInputText(e.target.value)
                        }}/>
                        <br/>

                        <button disabled={!this.ableToAddToDoText()} type="submit"
                                className="menu-button">Add
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoListStart