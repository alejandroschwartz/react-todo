export function TodoCounter(props) {
    return (
      <div>
        <h1>Ya completaste {props.completed} de {props.total} todos</h1>
      </div>
    )
}