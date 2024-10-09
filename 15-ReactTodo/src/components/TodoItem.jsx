export const TodoItem = ({id, description, onDeleteTodo }) => {
    return (
        <li>
            <span>{description}</span>
            <button onClick={()=>onDeleteTodo(id)}>Eliminar</button>
        </li>
    )
}