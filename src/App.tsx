import './App.css'
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import * as axios from "axios";
import TodoCard from "./components/Todo.tsx";





function App() {

    // Todo definieren: als const oder type?

    type Todo = {
        id: number
        description: string;
        status: "open" | "inProgress“ | “done“ "
    }


    // möglicherweise für die veränderung des status notwendig?
    const [todo, setTodo] = useState<Todo[]>([])

    // möglicherweise für die Übergabe des Status notwendig?
    const [status, setStatus] = useState<Todo.status>(status.open)

    // möglicherweise für den seitenwechsel notwendig?
    function updatePage(number: number) {
        setPage(number);
    }

    // möglicherweise für das update der Datenbank notwendig?
    useEffect(() => {
        fetchData(page)
    }, [page])

    function fetchData(page: number){
        axios.get("/api/todo/" + Todo.id).then((response) => {
            setData(response.data.data)
        }).catch((error => {
            console.log(error.message)
        }))
    }


    // neues Todo eingeben

    // Übergibt die Daten vom Input Feld um ein neues Todo zu erstellen
        function handleCreateTodo(event: ChangeEvent<HTMLInputElement>) {
            console.log(event.target.value)
            setTodo(event.target.value)   // muss ich hier nicht auch id und status übergeben?
        }

    // Stellt sicher, dass die Seite nicht immer neu geladen wird
        function handleSubmit(event: FormEvent<HTMLFormElement>) {
            event.preventDefault();
            alert("Todo was submitted: " + todo)
        }

    return (
        <>
          <div>
                <h1>Todo-App</h1>

              {data.length === 0 ? <h1>NO DATA</h1>:
                       {data.map((Todo: Todo) => {
                           return TodoCard})}}
          </div>

          <!-- Neues 'Todo' eingeben   -->
          <div>
                <form onSubmit={handleSubmit}>
                    <label>Neues Todo:
                    <input
                        type="text"
                        value={todo}
                        onChange={handleCreateTodo}
                        />
                    </label>
                    <button>Submit</button>
                </form>
          </div>
    </>
  )
}

export default App
