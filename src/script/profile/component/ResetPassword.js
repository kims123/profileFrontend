import React, {useState} from "react";
import '../../../css/VisAlleBrukere.css';
import {propertiesProfile} from "../../resources/properties-profile";
import ActionButton from "./ActionButton";

function ResetPassword(props) {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const requestPasswordReset = () => {
        if (password === confirmPassword) {
            document.getElementById("reset-password-msg").innerHTML = ""
        } else {
            document.getElementById("reset-password-msg").innerHTML = "Passord ikke likt"
            return
        }
        console.log("Requester passord reset")

        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                password: password,
                token: localStorage.getItem("passwordToken")
            })
        }

        fetch(propertiesProfile.hostUrlProfile + "/resetPassword", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response;
            })
            .then(() => {
                    props.visLoggInn()
                    document.getElementById("login-bruker-msg").innerHTML = "Passord er endret"
                    document.getElementById("login-bruker-msg").style.color = "green"
                }
            )
            .catch(error => {
                if (error.status === 400) {
                    document.getElementById("vis-alle-msg").innerHTML = "Feil token"
                }
            })
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPasswordReset()
            }}>
                <h2>Skriv inn nytt passord</h2>

                <p id="reset-password-msg" style={{color: "red"}}></p>

                <label>Password</label> <br/>
                <input type="password" value={password} required onChange={e => {
                    setPassword(e.target.value)
                }}/><br/>

                <label>Confirm password:</label> <br/>
                <input type="password" value={confirmPassword} required onChange={e => {
                    setConfirmPassword(e.target.value)
                }}/><br/>


                <ActionButton name="Reset" onClick={() => "submit"}/>

            </form>
        </div>
    )
}

export default ResetPassword