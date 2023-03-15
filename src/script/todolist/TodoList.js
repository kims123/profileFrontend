import React, {useState} from "react";
import '../../css/VisAlleBrukere.css';
import TodoListStart from "./TodoListStart";
import VisAlleTodosListe from "./VisAlleTodosListe";

function TodoList() {
    const [updateList, setUpdateList] = useState(false);

    return (
        <div style={{marginLeft: "20px"}}>
            <h2 style={{textDecoration: "underline", textAlign: "center"}}>TodoList</h2>
            <TodoListStart setUpdateList={setUpdateList} />
            <VisAlleTodosListe updateList={updateList} />
        </div>
    )
}

export default TodoList