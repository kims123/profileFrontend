import React, {useEffect, useState} from "react";
import {properties} from "../properties";

function VisAlleBrukereListe(props) {

    const [users, setUsers] = useState([])
    const [updateComponent, setUpdateComponent] = useState(true)

    useEffect(() => {
        if (updateComponent) {
            fetchUserData()
            setUpdateComponent(false)
        }

        if (props.refresh === false) {
            setUpdateComponent(true)
        }
    }, [props, updateComponent])

    const fetchUserData = () => {
        let token = localStorage.getItem("userToken")
        console.log("Henter profilen med token: " + token)

        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(properties.hostUrl + "/allUsers", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response;
            })
            .then(response => response.json())
            .then(users => {
                setUsers(users)
                document.getElementById("vis-alle-msg").innerHTML = ""
            })
            .catch(error => {
                if (error.status === 400) {
                    document.getElementById("vis-alle-msg").innerHTML = "Feil token"
                }
            })
    }

    return (
        <div>
            <h2>Brukernavn</h2>
            <p id="vis-alle-msg"></p>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VisAlleBrukereListe