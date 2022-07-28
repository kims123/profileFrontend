import '../css/App.css';
import Button from "./component/Button";
import React, {useEffect, useState} from "react";
import "../css/button.css"
import FormOpprettBruker from "./component/FormOpprettBruker";
import FormLoggInn from "./component/FormLoggInn";
import VisAlleBrukereListe from "./component/VisAlleBrukereListe";
import Profil from "./component/Profil";
import {properties} from "./properties";
import ActionButton from "./component/ActionButton";


function App() {

    function checkIfLoggedIn() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(properties.hostUrl + "/isLoggedInn", requestOptions)
            .then(response => {
                if (response.ok) {
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

        fetch(properties.hostUrl + "/logoutUser", requestOptions)
            .then(response => {
                if (response.ok) {
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
    const [showProfile, setShowProfile] = useState(false);
    const [showAnnet, setShowAnnet] = useState(false);

    const visOpprettBrukerForm = () => {
        setShowLoggInnForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowOpprettBrukerForm(true)
        setShowAnnet(false)
    }

    const visLoggInnForm = () => {
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowLoggInnForm(true)
        setShowAnnet(false)
    }

    const visAlleBrukereListe = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setShowProfile(false)
        setVisAlleBrukere(true)
        setShowAnnet(false)
    }

    const loggInn = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setErLoggedIn(true)
        setShowAnnet(false)
    }

    const loggUt = () => {
        loggUtUser()
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setErLoggedIn(false)
        setShowLoggInnForm(true)
        setShowAnnet(false)
        document.getElementById("login-bruker-msg").innerHTML = "Skriv inn brukernavn og passord"
    }

    const visProfil = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(true)
        setShowAnnet(false)
    }

    const visAnnet = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(true)
    }


    return (
        <div>
            <h1>Profilside</h1>

            <div className="nav-menu">
                <div hidden={erLoggedIn}>
                    <Button name="Opprett bruker" onClick={visOpprettBrukerForm}/>
                    <Button name="Logg inn" onClick={visLoggInnForm}/>
                </div>

                <div hidden={!erLoggedIn}>
                    <Button name="Profile" onClick={visProfil}/>
                    <Button name="Vis alle brukere" onClick={visAlleBrukereListe}/>
                </div>
                <Button name="Annet" onClick={visAnnet}/>

                <div hidden={!erLoggedIn}>
                    <ActionButton name="Logg ut" onClick={loggUt}/>
                </div>

            </div>
            <div hidden={!showOpprettBrukerForm}>
                <FormOpprettBruker/>
            </div>

            <div hidden={!showLoggInnForm}>
                <FormLoggInn loggInn={loggInn}/>
            </div>

            <div hidden={!visAlleBrukere}>
                <VisAlleBrukereListe refresh={visAlleBrukere}/>
            </div>

            <div hidden={!showProfile}>
                <Profil refresh={showProfile}/>
            </div>

            <div hidden={!showAnnet}>
                <h2>Annet</h2>
                <a href="https://kims123.github.io/ApplikasjonFrontend" target="_blank">FightClub</a>
            </div>

        </div>
    );
}

export default App;
