import './App.css'
import {useEffect, useState} from "react";
import * as axios from "axios";





type Todo = {
    id: number
    description: string;
    status: string // literals klappt leider nicht= "open" || "inProgress“ || “done“
}

function App() {

    const [data, setData] = useState<Todo[]>([])
    const [status, setStatus] = useState<Todo.status>("open")

    function updatePage(number: number) {
        setPage(number);
    }

    useEffect(() => {
        fetchData(page)
    }, [page])

    function fetchData(page: number){
        axios.get("/api/todo/" + Todo.id).then((response) => {
            setData(response.data.data)
        }).catch((error => {
            console.log(error.message)
        })
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
    </>
  )
}

export default App
