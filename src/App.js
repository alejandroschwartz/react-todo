import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton.js';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

export function App() {
  return (
    <div className="App">
      <TodoCounter completed={3} total={5}/>
      <TodoSearch/>
      <TodoList>
        <TodoItem item={"Curso de react"}/>
        <TodoItem item={"Clase de html"}/>
        <TodoItem item={"Hacer commit"}/>
      </TodoList>
      <CreateTodoButton/>
    </div>
  );
}