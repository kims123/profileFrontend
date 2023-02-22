import React, {useState} from "react";
import {properties} from "./resources/properties";
import ActionButton from "../profile/component/ActionButton";

function VisAlleTodosListe() {

    const [todos, setTodos] = useState([])

    const fetchTodos = () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: localStorage.getItem("userToken")
        }

        fetch(properties.hostUrl + "/allTodos", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response;
            })
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
            })
            .catch(error => {
                if (error.status === 400) {
                    document.getElementById("vis-alle-msg").innerHTML = "Feil token"
                }
            })
    }

    function slettTodo(todoElement) {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                id: todoElement.id,
                token: localStorage.getItem("userToken")
            })
        }

        fetch(properties.hostUrl + "/deleteTodo", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response;
            })
            .then(() => {
                const list = todos.allTodos.filter((o, i) => todoElement !== i);
                console.log("Slettet todos: ")
                this.setState({todos: list})
            })
            .catch(error => {
                if (error.status === 400) {
                    document.getElementById("vis-alle-msg").innerHTML = "Feil token"
                }
            })
    }

    return (
        <div>
            <div>
                <h2>Brukernavn</h2>
                <p id="vis-alle-msg"></p>

                <div>
                    <table>
                        <thead>
                        <tr>
                            <td>ID</td>
                            <th>Todo</th>
                            <th>Opprettet</th>
                            <th>Slett</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.allTodos !== undefined &&
                            todos.allTodos.map((todoElement) => (
                                <tr key={todoElement.todoElement}>
                                    <td>{todoElement.id}</td>
                                    <td>{todoElement.todoElement}</td>
                                    <td>{todoElement.datoOpprettet}</td>
                                    <td><ActionButton name="Slett"
                                                      onClick={() => slettTodo(todoElement)}></ActionButton></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="child-component">
                <ActionButton name="Refresh" onClick={() => fetchTodos()}></ActionButton>
            </div>
        </div>
    )
}

export default VisAlleTodosListe