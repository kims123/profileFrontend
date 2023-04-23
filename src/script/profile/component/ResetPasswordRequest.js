import React, {useState} from "react";
import '../../../css/VisAlleBrukere.css';
import {propertiesProfile} from "../../resources/properties-profile";
import ActionButton from "./ActionButton";

function ResetPasswordRequest(props) {

    const [username, setUsername] = useState("")

    const requestPasswordReset = () => {
        console.log("Requester passord reset")

        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                username: username,
                intent: "reset"
            })
        }

        fetch(propertiesProfile.hostUrlProfile + "/resetPasswordRequest", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response;
            })
            .then(response => response.text())
            .then(response => localStorage.setItem("passwordToken", response))
            .then(() => {
                document.getElementById("reset-password-request-msg").innerHTML = ""
                props.resetPasswordFerdig()
            })
            .catch(error => {
                console.log("Error reset password: " + error)
                if (error.status === 400) {
                    document.getElementById("reset-password-request-msg").innerHTML = "Bruker [" + username + "] finnes ikke"
                }
            })
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPasswordReset()
            }}>
                <h2>Glemt passord</h2>

                <p>Skriv brukernavn for å få en mail for å resette passord</p>
                <p id="reset-password-request-msg" style={{color: "red"}}></p>

                <label>Brukernavn</label> <br/>
                <input type="text" value={username} required onChange={e => {
                    setUsername(e.target.value)
                }}/><br/>

                <ActionButton name="Send link" onClick={() => "submit"}/>
            </form>
        </div>
    )
}

export default ResetPasswordRequest