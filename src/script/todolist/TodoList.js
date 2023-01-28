import React from "react";
import '../../css/VisAlleBrukere.css';
import TodoListStart from "./TodoListStart";
import VisAlleTodosListe from "./VisAlleTodosListe";

function TodoList() {
    return (
        <div style={{marginLeft: "20px"}}>
            <h2 style={{textDecoration: "underline", textAlign: "center"}}>TodoList</h2>
            <TodoListStart />
            <VisAlleTodosListe />
        </div>
    )
}

export default TodoList