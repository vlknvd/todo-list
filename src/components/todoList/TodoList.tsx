import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import './todoList.css';
import type { State, Todo } from '../../types';

const TodoList = () => {
  const todos = useSelector((state: State) => state.todos);
  const filter = useSelector((state: State) => state.filter);
  const activeTask = useSelector(
    (state: State) => state.todos.filter((el) => el.completed !== true).length
  );
  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') return todo.completed;
    return true;
  });
  return (
    <ul className='todo-list'>
      <p className='todo-list__active'>
        Активных задач: <span>{activeTask}</span>
      </p>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
