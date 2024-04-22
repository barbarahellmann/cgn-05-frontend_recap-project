import './App.css'
import {useEffect, useState} from "react";
import * as axios from "axios";





function App() {

    // Todo definieren: als const oder type?

    type Todo = {
        id: number
        description: string;
        status: "open" | "inProgress“ | “done“ "
    }


    // möglicherweise für die veränderung des status notwendig?
    const [data, setData] = useState<Todo[]>([])

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


    // neues Todo übergeben
    function SubmitTodo(props) {
        const [todo, setTodo] = useState("");


        const handleSubmit = (event) => {
            alert("A todo was submitted: " + todo);
            event.preventDefault();
        };
    }


    return (
        <>
      <div>
            <h1>Todo-App</h1>
                 {data.length === 0 ? <h1>NO DATA</h1>: <ul>
                   {data.map((todo: Todo) => {
                       return <li key={Todo.id}>{Todo.description} {Todo.status}</li>
                   })}
                 </ul>}
      </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Add Todo:
                    <input
                        type="text"
                        value={todo}
                        onChange={event => setTodo(event.target.value)}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
    </>
  )
}

export default App
