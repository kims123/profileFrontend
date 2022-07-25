import '../css/App.css';
import Button from "./component/Button";
import {useEffect, useState} from "react";
import "../css/button.css"
import FormOpprettBruker from "./component/FormOpprettBruker";
import FormLoggInn from "./component/FormLoggInn";
import VisAlleBrukereListe from "./component/VisAlleBrukereListe";
import Profil from "./component/Profil";
import React from "react"


function App() {

    function checkIfLoggedIn() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch("http://localhost:8080/isLoggedInn", requestOptions)
            .then(response => {
                if(response.ok){
                    return response;
                } else {
                    throw response;
                }
            })
            .then(() => setErLoggedIn(true))
            .catch(() => setErLoggedIn(false))
    }

    function loggUtUser() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch("http://localhost:8080/logoutUser", requestOptions)
            .then(response => {
                if(response.ok){
                    return response;
                } else {
                    throw response;
                }
            })
            .then(() => setErLoggedIn(true))
            .catch(() => setErLoggedIn(false))
    }

    useEffect(() => {
        checkIfLoggedIn()
    })

    const [showOpprettBrukerForm, setShowOpprettBrukerForm] = useState(false);
    const [showLoggInnForm, setShowLoggInnForm] = useState(false);
    const [erLoggedIn, setErLoggedIn] = useState(false);
    const [visAlleBrukere, setVisAlleBrukere] = useState(false);
    const [oppdaterAlleBrukere, setOppdaterAlleBrukere] = useState(0);
    const [showProfile, setShowProfile] = useState(false);
    const [token, setToken] = useState("")

    const visOpprettBrukerForm = () => {
        setShowLoggInnForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowOpprettBrukerForm(true)
    }

    const visLoggInnForm = () => {
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowLoggInnForm(true)
    }

    const visAlleBrukereListe = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setShowProfile(false)
        setVisAlleBrukere(true)
    }

    const loggInn = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setErLoggedIn(true)
    }

    const loggUt = () => {
        loggUtUser()
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setErLoggedIn(false)
        setShowLoggInnForm(true)
        document.getElementById("login-bruker-msg").innerHTML = "Skriv inn brukernavn og passord"
    }

    const visProfil = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(true)
    }


    return (
        <div>
            <h1>Profilside</h1>

            <div className="nav-menu">
                <div hidden={erLoggedIn}>
                    <Button nameone="Opprett bruker" onClick={visOpprettBrukerForm}/>
                    <Button nameone="Logg inn" onClick={visLoggInnForm}/>
                </div>

                <div hidden={!erLoggedIn}>
                    <Button nameone="Profile" onClick={visProfil} />
                    <Button nameone="Vis alle brukere" onClick={visAlleBrukereListe}/>
                    <Button nameone="Logg ut" onClick={loggUt}/>
                </div>
            </div>
            <div hidden={!showOpprettBrukerForm}>
                <FormOpprettBruker />
            </div>

            <div hidden={!showLoggInnForm}>
                <FormLoggInn loggInn={loggInn}/>
            </div>

            <div hidden={!visAlleBrukere}>
                <VisAlleBrukereListe refresh={visAlleBrukere}  />
            </div>

            <div hidden={!showProfile}>
                <Profil token={token} refresh={showProfile} />
            </div>

        </div>
    );
}

export default App;
