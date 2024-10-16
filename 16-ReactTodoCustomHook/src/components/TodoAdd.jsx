export const TodoAdd = ({onNewTodo}) => {

    const onFormSubmit = (event) => {
        event.preventDefault()
        
        const description = event.target[0].value

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo)
        console.log("Formulario enviado")
    }
    return (
        <div>
            <form onSubmit={(event) => onFormSubmit(event)}>
                <input type="text" placeholder="Aprender..." />
                <button>Agregar</button>
            </form>
        </div>
    )
}