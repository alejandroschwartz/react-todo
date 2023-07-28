import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed === true).length;
    const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodos = (todoId) => {
        let newTodos = [...todos];
        let todoIndex = newTodos.findIndex(todo => todo.id === todoId);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodos = (todoId) => {
        let newTodos = [...todos];
        let todoIndex = newTodos.findIndex(todo => todo.id === todoId);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        let newTodos = [...todos];
        const lastId = newTodos.map(todo => todo.id).reduce((last, current) => current, null) + 1;
        newTodos.push({id: lastId, text, completed: false});
        saveTodos(newTodos);
    };

    const [openModal, setOpenModal] = useState(false);

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo,
        }} >
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };