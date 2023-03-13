import React from "react";
import ChangeProfilepicture from "../component/ChangeProfilepicture";
import {propertiesProfile} from "../resources/properties-profile";
import ActionButton from "../component/ActionButton";

class Form extends React.Component {

    state = {
        image: "",
        username: "",
        age: "",
        email: "",
        passwordOld: "",
        passwordNew: "",
        passwordNewConfirm: ""
    }

    componentDidMount() {
        this.initialState = this.state
    }

    handleSubmit = () => {
        if (this.state.password !== this.state.confPassword) {
            alert("Password stemmer ikke");
        } else {

            let token = localStorage.getItem("userToken")

            const requestOptions = {
                method: "POST",
                headers: {"Content-type": "Application/json"},
                body: JSON.stringify({
                    username: this.state.username,
                    passwordOld: this.state.passwordOld,
                    passwordNew: this.state.passwordNew,
                    email: this.state.email,
                    age: this.state.age,
                    token
                })
            }
            fetch(propertiesProfile.hostUrlProfile + "/changeUser", requestOptions)
                .then(response => response.text())
                .then(data => {
                    document.getElementById("endre-bruker-msg").innerHTML = "Brukerdata endret"
                    this.setState(this.initialState)
                    this.props.refreshParent()
                })
        }
    }
    changeImage = e => {
        this.setState({image: e})
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
    changePasswordOld = e => {
        this.setState({passwordOld: e})
    }
    changePasswordNew = e => {
        this.setState({passwordNew: e})
    }
    changePasswordNewConfirm = e => {
        this.setState({passwordNewConfirm: e})
    }

    render() {
        return <div>
            <ChangeProfilepicture refreshParent={this.props.refreshParent}/>
            <form onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit()
            }}>

                <h2>Endre bruker</h2>

                <p id="endre-bruker-msg">Her skal det komme en tekst</p>

                <label>Username: </label><br/>
                <input type="text" value={this.state.username} onChange={(e) => {
                    this.changeName(e.target.value)
                }}/>
                <br/>

                <label>Age:</label><br/>
                <input type="text" value={this.state.age} onChange={(e) => {
                    this.changeAge(e.target.value)
                }}/>
                <br/>

                <label>Email:</label> <br/>
                <input type="email" value={this.state.email} onChange={(e) => {
                    this.changeEmail(e.target.value)
                }}/>
                <br/>

                <label>Old password:</label> <br/>
                <input type="password" value={this.state.passwordOld} onChange={(e) => {
                    this.changePasswordOld(e.target.value)
                }}/>
                <br/>

                <label>New password:</label> <br/>
                <input type="password" value={this.state.passwordNew} onChange={(e) => {
                    this.changePasswordNew(e.target.value)
                }}/>
                <br/>

                <label>Confirm new password:</label> <br/>
                <input type="password" value={this.state.passwordNewConfirm} onChange={(e) => {
                    this.changePasswordNewConfirm(e.target.value)
                }}/>
                <br/>

                <ActionButton name="Endre" onClick={() => "submit"} />
            </form>
        </div>
    }
}

export default Form