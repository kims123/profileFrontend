import '../css/App.css';
import Button from "./profile/component/Button";
import React, {useEffect, useState} from "react";
import "../css/button.css"
import FormOpprettBruker from "./profile/classes/FormOpprettBruker";
import FormLoggInn from "./profile/classes/FormLoggInn";
import VisAlleBrukereListe from "./profile/component/VisAlleBrukereListe";
import Profil from "./profile/classes/Profil";
import {propertiesProfile} from "./resources/properties-profile";
import {Dropdown, DropdownButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherApplication from "./profile/component/WeatherApplication";
import FantasyRpg from "./fantasyrpg/FantasyRpg";
import ActionButtonRed from "./profile/component/ActionButtonRed";
import Tictactoe from "./tictactoe/Tictactoe";
import TodoList from "./todolist/TodoList";
import CVpage from "./profile/component/CVpage";
import ActionButton from "./profile/component/ActionButton";
import ResetPasswordRequest from "./profile/component/ResetPasswordRequest";
import ResetPasswordFerdig from "./profile/component/ResetPasswordFerdig";
import ResetPassword from "./profile/component/ResetPassword";

function App() {

    useEffect(() => {
        const windowUrl = window.location.search;
        const params = new URLSearchParams(windowUrl);

        if(params.get('reset_token')) {
            visResetPassord()
        }
    }, []);

    function checkIfLoggedIn() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(propertiesProfile.hostUrlProfile + "/isLoggedInn", requestOptions)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    throw response;
                }
            })
            .then(response => {
                return response.text()
            })
            .then(response => {
                setErLoggedIn(JSON.parse(response))
            })
            .catch(() => setErLoggedIn(false))
    }

    function loggUtUser() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(propertiesProfile.hostUrlProfile + "/logoutUser", requestOptions)
            .then(response => {
                if (response.ok) {
                    console.log("Logget ut OK")
                    return response;
                } else {
                    console.log("Logget ut. IKKE OK")
                    throw response;
                }
            })
            .then(() => {
                console.log("Logget ut success!")
                setErLoggedIn(true)
            })
            .catch(() => {
                console.log("Logget ut failet")
                setErLoggedIn(false)
            })
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
    const [showTicTacToe, setShowTicTacToe] = useState(false);
    const [showTodoList, setShowTodoList] = useState(false);
    const [showCVpage, setShowCVpage] = useState(false);
    const [showResetPasswordRequest, setResetPasswordRequest] = useState(false);
    const [showResetPasswordFerdig, setResetPasswordFerdig] = useState(false);
    const [showResetPassword, setResetPassword] = useState(false);

    const visOpprettBrukerForm = () => {
        setShowLoggInnForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowOpprettBrukerForm(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visLoggInnForm = () => {
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowLoggInnForm(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visAlleBrukereListe = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setShowProfile(false)
        setVisAlleBrukere(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const loggInn = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setErLoggedIn(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
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
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visProfil = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(true)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visAnnet = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(true)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visWeatherApplication = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(true)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visFantasyRpg = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(true)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visTicTacToe = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(true)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visTodoList = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(true)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visCVpage = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(true)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visResetPassordRequest = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(true)
        setResetPasswordFerdig(false)
        setResetPassword(false)
    }

    const visResetPassordFerdig = () => {
        console.log("Vis reset password ferdig")
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(true)
        setResetPassword(false)
    }

    const visResetPassord = () => {
        setShowLoggInnForm(false)
        setShowOpprettBrukerForm(false)
        setVisAlleBrukere(false)
        setShowProfile(false)
        setShowAnnet(false)
        setShowWeatherApplication(false)
        setShowFantasyRpg(false)
        setShowTicTacToe(false)
        setShowTodoList(false)
        setShowCVpage(false)
        setResetPasswordRequest(false)
        setResetPasswordFerdig(false)
        setResetPassword(true)
    }

    return (
        <div>
            <h1>Kim Frode Flæthe</h1>

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
                        <Dropdown.Item onClick={visTicTacToe}>Tick tack toe</Dropdown.Item>
                        <Dropdown.Item onClick={visTodoList}>TodoList</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Button name="Annet" onClick={visAnnet}/>
                <ActionButton name="CV" onClick={visCVpage}/>

                <div hidden={!erLoggedIn} style={{"marginLeft": "auto"}}>
                    <ActionButtonRed name="Logg ut" onClick={loggUt}/>
                </div>
            </div>
            <div hidden={!showOpprettBrukerForm}>
                <FormOpprettBruker/>
            </div>

            <div hidden={!showLoggInnForm}>
                <FormLoggInn loggInn={loggInn} visResetPassord={visResetPassordRequest}/>
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

            <div hidden={!showTicTacToe}>
                <Tictactoe/>
            </div>

            <div hidden={!showTodoList}>
                <TodoList/>
            </div>

            <div hidden={!showCVpage}>
                <CVpage/>
            </div>

            <div hidden={!showResetPasswordRequest}>
                <ResetPasswordRequest resetPasswordFerdig={visResetPassordFerdig}/>
            </div>

            <div hidden={!showResetPasswordFerdig}>
                <ResetPasswordFerdig/>
            </div>

            <div hidden={!showResetPassword}>
                <ResetPassword visLoggInn={visLoggInnForm} />
            </div>

        </div>
    );
}

export default App;
