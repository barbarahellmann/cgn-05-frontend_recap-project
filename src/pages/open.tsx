import {Todo} from "../App.tsx"
import {data} from "../App.tsx"
import TodoCard from "../components/Todo.tsx";

export default function Open() {

    const openTodos = Todo.filter(e => e.status === Todo.status.OPEN)

    return <>
    <h2>Open</h2>
      {openTodos}

        {data.length === 0 ? <h1>NO DATA</h1>: <ul>
            {data.map((openTodos1: openTodo) => {
                return <li key={Todo.id}>{TodoCard} </li>
                    })}
        </ul>}

    </>
}