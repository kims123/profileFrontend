import React, {useEffect, useState} from "react";
import {propertiesProfile} from "../resources/properties-profile";
import ProfilInfo from "../classes/ProfilInfo";
import '../../../css/VisAlleBrukere.css';
import ActionButton from "./ActionButton";

function VisAlleBrukereListe(props) {

    const [users, setUsers] = useState([])
    const [highlightedUser, setHighlightedUser] = useState("")
    const [updateComponent, setUpdateComponent] = useState(true)
    const [showProfileInfo, setShowProfileInfo] = useState(false);
    const [refreshProfileInfo, setRefreshProfileInfo] = useState(false);

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

        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(propertiesProfile.hostUrlProfile + "/allUsers", requestOptions)
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

    function showProfil(user) {
        setShowProfileInfo(true)
        setRefreshProfileInfo(!refreshProfileInfo)
        setHighlightedUser(user)
    }

    function getHighlightedUser() {
        return highlightedUser
    }

    return (
        <div className="parent-component">
            <div className="child-component">
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
                                <td className="td-link" onClick={() => showProfil(user)}>{user.username}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="child-component"
                 hidden={!showProfileInfo}>
                <ProfilInfo highlightedUser={getHighlightedUser()}/>
                <ActionButton name="Lukk" onClick={() => setShowProfileInfo(false)}></ActionButton>
            </div>
        </div>
    )
}

export default VisAlleBrukereListe