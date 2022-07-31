import '../css/App.css';
import Button from "./profile/component/Button";
import React, {useEffect, useState} from "react";
import "../css/button.css"
import FormOpprettBruker from "./profile/component/FormOpprettBruker";
import FormLoggInn from "./profile/component/FormLoggInn";
import VisAlleBrukereListe from "./profile/component/VisAlleBrukereListe";
import Profil from "./profile/component/Profil";
import {properties} from "./properties";
import ActionButton from "./profile/component/ActionButton";
import {Dropdown, DropdownButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherApplication from "./profile/component/WeatherApplication";
import FantasyRpg from "./fantasyrpg/component/FantasyRpg";

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
    const [showWeatherApplication, setShowWeatherApplication] = useState(false);
    const [showFantasyRpg, setShowFantasyRpg] = useState(false);

    const visOpprettBrukerForm = () => {
        setShowLoggInnForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowOpprettBrukerForm(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
    }

    const visLoggInnForm = () => {
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowLoggInnForm(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
    }

    const visAlleBrukereListe = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setShowProfile(false)
        setVisAlleBrukere(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
    }

    const loggInn = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setErLoggedIn(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
    }

    const loggUt = () => {
        loggUtUser()
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setErLoggedIn(false)
        setShowLoggInnForm(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        document.getElementById("login-bruker-msg").innerHTML = "Skriv inn brukernavn og passord"
    }

    const visProfil = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
    }

    const visAnnet = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(true)
        setShowWeatherApplication(false)
    }

    const visWeatherApplication = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(true)
    }

    const visFantasyRpg = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(true)
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
                    <DropdownButton className="menu-button-inside" id="dropdown-basic-button" title="Applikasjoner"
                                    style={{display: "inline"}}>
                        <Dropdown.Item onClick={visWeatherApplication}>Weather application</Dropdown.Item>
                        <Dropdown.Item onClick={visFantasyRpg}>Fantasy RPG</Dropdown.Item>
                        <Dropdown.Item onClick={visWeatherApplication}>Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Button name="Annet" onClick={visAnnet}/>

                <div hidden={!erLoggedIn} style={{"margin-left": "auto"}}>
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

            <div hidden={!showWeatherApplication}>
                <WeatherApplication/>
            </div>

            <div hidden={!showFantasyRpg}>
                <FantasyRpg/>
            </div>

        </div>
    );
}

export default App;
