import {Todo} from "../App.tsx"
import TodoCard from "../components/Todo.tsx";

export default function Open() {

    const openTodos = Todo.filter(e => e.status === Todo.status.OPEN)

    return <>
    <h2>Open</h2>
      {openTodos}TodoCard
    </>
}