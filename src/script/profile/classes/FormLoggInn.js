import React from "react";
import {propertiesProfile} from "../../resources/properties-profile";
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
        fetch(propertiesProfile.hostUrlProfile + "/login", requestOptions)
            .then(async response => {
                if (response.ok) {
                    return response.text()
                } else {
                    throw new Error(await response.text())
                }
            })
            .then(data => localStorage.setItem("userToken", data))
            .then(() => {
                this.changeUsername("")
                this.changePassword("")
            })
            .then(this.props.loggInn)
            .catch(() => {
                document.getElementById("login-bruker-msg").innerHTML = "Feil brukernavn eller passord"
                document.getElementById("login-bruker-msg").style.color = "red"

            })
    }

    render() {
        return <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit()
            }}>
                <h2>Logg inn</h2>

                <p id="login-bruker-msg"></p>

                <label>Username:</label> <br/>
                <input className="neumorphic-input" type="text" value={this.state.username} required onChange={e => {
                    this.changeUsername(e.target.value)
                }}/><br/>

                <label>Passord:</label> <br/>
                <input className="neumorphic-input" type="password" value={this.state.password} required onChange={e => {
                    this.changePassword(e.target.value)
                }}/><br/>

                <ActionButton name="Logg inn" onClick={() => "submit"}/>

            </form>
        </div>
    }
}

export default FormLoggInn