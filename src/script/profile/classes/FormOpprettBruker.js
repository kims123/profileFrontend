import React from "react";
import {propertiesProfile} from "../../resources/properties-profile";

class FormOpprettBruker extends React.Component {

    state = {
        username: "",
        age: "",
        email: "",
        password: "",
        confPassword: ""
    }

    handleSubmit = () => {
        if (this.state.password !== this.state.confPassword) {
            document.getElementById("reg-bruker-msg").innerHTML = "Passord stemmer ikke"
            this.changePassword("")
            this.changeConfPassword("")
        } else {

            const requestOptions = {
                method: "POST",
                headers: {"Content-type": "Application/json"},
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    age: this.state.age
                })
            }
            fetch(propertiesProfile.hostUrlProfile + "/createUser", requestOptions)
                .then(response => response.text())
                .then(data => document.getElementById("reg-bruker-msg").innerHTML = data)
        }
    }
    changeName = e => {
        this.setState({username: e})
    }
    changeAge = e => {
        this.setState({age: e})
    }
    changeEmail = e => {
        this.setState({email: e})
    }
    changePassword = e => {
        this.setState({password: e})
    }
    changeConfPassword = e => {
        this.setState({confPassword: e})
    }

    handleSubmitTestbruker = () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.username,
                email: "fletn3000@hotmail.com",
                age: 36
            })
        }
        fetch(propertiesProfile.hostUrlProfile + "/createUser", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw response
                } else {
                    return response.text()
                }
            })
            .then(() => {
                document.getElementById("reg-bruker-msg").style.color = "black"
                document.getElementById("reg-bruker-msg").innerHTML = "Bruker [" + this.state.username + "] opprettet. Samme passord."
                this.changeName("")
            })
            .catch(error => {
                document.getElementById("reg-bruker-msg").style.color = "red"
                if (error.status === 400) {
                    document.getElementById("reg-bruker-msg").innerHTML = "Bruker [" + this.state.username + "] finnes fra før"
                } else {
                    document.getElementById("reg-bruker-msg").innerHTML = error.message
                }
            })
    }

    render() {
        return <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit()
            }}>

                <h2>Registrer bruker</h2>

                <p id="reg-bruker-msg">Infotekst for registrer bruker</p>

                <label>Username: </label><br/>
                <input type="text" value={this.state.username} required onChange={(e) => {
                    this.changeName(e.target.value)
                }}/>
                <br/>

                <label>Age:</label><br/>
                <input type="text" value={this.state.age} required onChange={(e) => {
                    this.changeAge(e.target.value)
                }}/>
                <br/>

                <label>Email:</label> <br/>
                <input type="email" value={this.state.email} required onChange={(e) => {
                    this.changeEmail(e.target.value)
                }}/>
                <br/>

                <label>Password:</label> <br/>
                <input type="password" value={this.state.password} required onChange={(e) => {
                    this.changePassword(e.target.value)
                }}/>
                <br/>

                <label>Confirm password:</label> <br/>
                <input type="password" value={this.state.confPassword} required onChange={(e) => {
                    this.changeConfPassword(e.target.value)
                }}/>
                <br/>

                <button type="submit" value="Knapp submit" className="menu-button">Opprett</button>
            </form>

            <form onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmitTestbruker()
            }}>

                <h2>Registrer testbruker</h2>

                <label>Username: </label><br/>
                <input type="text" value={this.state.username} required onChange={(e) => {
                    this.changeName(e.target.value)
                    this.changePassword(e.target.value)
                }}/>
                <br/>


                <button type="submit" value="Knapp submit" className="menu-button">Opprett testbruker</button>
            </form>
        </div>
    }
}

export default FormOpprettBruker