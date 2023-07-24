
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
}) {
    return (
        <div className="App">
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList>
            {loading && <TodoLoading/>}
            {error && <TodoError/>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p>}

            {searchedTodos.map(item => 
              <TodoItem 
                key={item.id}
                item={item.text}
                completed={item.completed}
                onComplete={() => completeTodos(item.id)}
                onDelete={() => deleteTodos(item.id)}
              />
            )}
          </TodoList>
          <CreateTodoButton/>
        </div>
    );
};

export { AppUI };