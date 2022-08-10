import React, {useState} from "react";
import {properties} from "../../properties";
import '../../../css/VisAlleBrukere.css';
import ActionButton from "./ActionButton";

function VisAlleBrukereListe(props) {

    const [searchArea, setSearchArea] = useState("")
    const [weatherResult, setWeatherResult] = useState([])

    const fetchWeatherData = () => {
        let token = localStorage.getItem("userToken")

        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(properties.hostWeatherAppUrl + "/getWeatherFor?area=" + searchArea, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                setWeatherResult(data.intervals)
            })
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
                fetchWeatherData()
            }}>
                <h2>Weather appliks</h2>

                <p id="weather-app-msg">Her skal det komme en tekst</p>

                <label>Area:</label> <br/>
                <input type="text" value={searchArea} required onChange={e => {
                    setSearchArea(e.target.value)
                }}/><br/>


                <ActionButton name="Søk" onClick={() => "submit"}/>

            </form>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Dato</th>
                        <th>Klokkeslett</th>
                        <th>Temperatur</th>
                    </tr>
                    </thead>
                    <tbody>
                    {weatherResult.map((weather) => (
                        <tr key={weather.startTime}>
                            <td>{weather.startTime.substring(
                                0,
                                weather.startTime.lastIndexOf("T")
                            ).substring(0, 10)}</td>
                            <td>{weather.startTime.substring(
                                weather.startTime.indexOf("T") + 1,
                                weather.startTime.lastIndexOf("Z")
                            ).substring(0, 5)}</td>
                            <td>{weather.values.temperature}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VisAlleBrukereListe