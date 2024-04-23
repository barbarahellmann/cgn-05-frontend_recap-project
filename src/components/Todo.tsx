export type Todo = {
    id: number
    description: string;
    status: "open" | "inProgress“ | “done“ "

}

type TodopProps = {
    Todo: Todo
}



export function TodoCard() {
    return <li key={Todo.id}>
        <h3>{Todo.description}</h3>
        <h3>{Todo.status}</h3>
    </li>
}