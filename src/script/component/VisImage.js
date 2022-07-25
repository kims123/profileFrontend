import React, {useState} from "react";
import Button from "./Button";

function VisImage(props) {
    const [selectedImage, setSelectedImage] = useState()

    const oppdaterProfilbilde = () => {
        const formData = new FormData()
        formData.append("profilePicture", selectedImage)
        formData.append("token", localStorage.getItem("userToken"))

        const requestOptions = {
            method: "POST",
            body: formData
        }
        fetch("http://localhost:8080/changeProfilePicture", requestOptions)
            .then(response => response.text())
            .then(data => {
                document.getElementById("endre-bruker-msg").innerHTML = "Brukerdata endret"
                // this.setState(this.initialState)
                props.refreshParent()
                setSelectedImage(null)
            })
    }

    return (
        <div>
            <h2>Endre profilbilde</h2>
            {selectedImage && (
                <div>
                    <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
                    <br/>
                    <Button nameone="Remove" onClick={() => setSelectedImage(null)}></Button>
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

            <Button nameone="Oppdater profilbilde" onClick={oppdaterProfilbilde}/>
        </div>
    )
}

export default VisImage