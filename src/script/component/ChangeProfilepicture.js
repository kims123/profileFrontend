import React, {useState} from "react";
import Button from "./Button";
import {properties} from "../properties";
import ActionButton from "./ActionButton";

function ChangeProfilepicture(props) {
    const [selectedImage, setSelectedImage] = useState()

    const oppdaterProfilbilde = () => {
        if (selectedImage === null || selectedImage === undefined) {
            document.getElementById("endre-bruker-msg").style.color = "red"
            document.getElementById("endre-bruker-msg").innerHTML = "Ingen bilde valgt"
        } else {
            const formData = new FormData()
            formData.append("profilePicture", selectedImage)
            formData.append("token", localStorage.getItem("userToken"))

            const requestOptions = {
                method: "POST",
                body: formData
            }
            fetch(properties.hostUrl + "/changeProfilePicture", requestOptions)
                .then(response => response.text())
                .then(() => {
                    document.getElementById("endre-bruker-msg").style.color = "black"
                    document.getElementById("endre-bruker-msg").innerHTML = "Brukerdata endret"
                    props.refreshParent()
                    setSelectedImage(null)
                })
        }
    }

    return (
        <div>
            <h2>Endre profilbilde</h2>
            {selectedImage && (
                <div>
                    <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
                    <br/>
                    <Button name="Remove" onClick={() => setSelectedImage(null)}></Button>
                </div>
            )}
            <br/>

            <br/>
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    setSelectedImage(event.target.files[0])
                }}
            />

            <ActionButton name="Oppdater profilbilde" onClick={oppdaterProfilbilde}/>
        </div>
    )
}

export default ChangeProfilepicture