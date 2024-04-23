import {Todo} from "../App.tsx"

type TodopProps ={
    Todo: Todo

}



export default function TodoCard() {
    return <li key={Todo.id}>
        <h3>{Todo.description}</h3>
        <h3>{Todo.status}</h3>
    </li>
}