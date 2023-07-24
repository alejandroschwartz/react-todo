import './TodoList.css';

export function TodoList({ children }) {
    return (
      <>
        <h3>Lista de TODO´s</h3>
        <ul className="TodoList">
            {children}
        </ul>
      </>
    )
}