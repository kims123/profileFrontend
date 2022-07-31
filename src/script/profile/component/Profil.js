import React from "react";
import FormEndreBruker from "./FormEndreBruker";
import {properties} from "../../properties";
import ActionButton from "./ActionButton";
import '../../../css/Profil.css';


class Profil extends React.Component {

    state = {
        token: "",
        showOpprettBrukerForm: false,
        imageData: "",
        updateComponent: true
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        console.log("componentDidUpdate: " + props.refresh)
        if (props.refresh && this.state.updateComponent) {
            this.fetchUserData()
            this.setState({updateComponent: false})
        }

        if (props.refresh === false) {
            this.setState({updateComponent: true})
        }
    }

    fetchUserData = () => {
        console.log("Henter profilen")

        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(properties.hostUrl + "/user", requestOptions)
            .then(response => {
                if (!response.ok) {
                    document.getElementById("profil-msg").innerHTML = "Feil token"
                }
                return response;
            })
            .then(response => response.json())
            .then(user => {
                document.getElementById("profil-headline").innerHTML = user.username + "'s profile";
                document.getElementById("profil-text-info-username").innerHTML = "Username: " + user.username;
                document.getElementById("profil-text-info-email").innerHTML = "Email: " + user.email;
                document.getElementById("profil-text-info-age").innerHTML = "Age: " + user.age;
                return user
            })
            .then(user => {
                if (user.profilePicture != null) {
                    console.log("Fant profilbilde")
                    this.setState({imageData: `data:image/png;base64,${user.profilePicture}`})
                } else {
                    this.setState({imageData: "https://4.bp.blogspot.com/_ndu1QvzN_g4/TGyv2ll3qJI/AAAAAAAAAJs/ZWV9JPibojA/s1600/fb-default-pics-2.jpg"})
                }
            })
    }

    showEditProfile = () => {
        this.setState({showOpprettBrukerForm: !this.state.showOpprettBrukerForm})
    }

    render() {
        console.log("Profil render")
        return (
            <div className="profil-parent-component">
                <div className="profil-child-component">
                    <h2 id="profil-headline">'s profile</h2>

                    <img id="profil-image" alt="not found" width={"250px"}
                         src={this.state.imageData}></img>
                    <p id="profil-msg"></p>
                    <p id="profil-text-info-username">Text text text</p>
                    <p id="profil-text-info-email">Text text text</p>
                    <p id="profil-text-info-age">Text text text</p>
                    <ActionButton name="Edit profile" onClick={this.showEditProfile}/>
                </div>

                <div className="profil-child-component"
                     hidden={!this.state.showOpprettBrukerForm}>
                    <FormEndreBruker refreshParent={this.fetchUserData}/>
                </div>
            </div>
        )
    }
}

export default Profil