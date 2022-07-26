import React from "react";
import {properties} from "../resources/properties";
import ActionButton from "../component/ActionButton";

class FormLoggInn extends React.Component {

    state = {
        username: "",
        password: ""
    }

    changeUsername = e => {
        this.setState({username: e})
    }
    changePassword = e => {
        this.setState({password: e})
    }

    handleSubmit = () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }
        fetch(properties.hostUrl + "/login", requestOptions)
            .then(async response => {
                if (response.ok) {
                    return response.text()
                } else {
                    throw new Error(await response.text())
                }
            })
            .then(data => localStorage.setItem("userToken", data))
            .then(this.props.loggInn)
            .catch(reason => document.getElementById("login-bruker-msg").innerHTML = reason)

    }

    render() {
        return <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit()
            }}>
                <h2>Logg inn</h2>

                <p id="login-bruker-msg">Her skal det komme en tekst</p>

                <label>Username:</label> <br/>
                <input type="text" value={this.state.username} required onChange={e => {
                    this.changeUsername(e.target.value)
                }}/><br/>

                <label>Passord:</label> <br/>
                <input type="password" value={this.state.password} required onChange={e => {
                    this.changePassword(e.target.value)
                }}/><br/>

                <ActionButton name="Logg inn" onClick={() => "submit"}/>

            </form>
        </div>
    }
}

export default FormLoggInn