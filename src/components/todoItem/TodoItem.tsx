import { useDispatch } from 'react-redux';
import Button from '../button/Button';
import './todoItem.css';
import { completedTodo, removeTodo } from '../../actions/actions';
import type { Todo } from '../../types';

const TodoItem = ({ id, task, completed }: Todo) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeTodo(id));
  };

  const todoCompleted = () => {
    dispatch(completedTodo(id));
  };

  return (
    <li key={id} className='todo-item'>
      <label htmlFor={`todo-${id}`} className='todo-item__label'>
        <input
          type='checkbox'
          id={`todo-${id}`}
          className='todo-item__checkbox'
          checked={completed}
          onChange={todoCompleted}
        />
        <span className='todo-item__custom-checkbox'></span>
        <span className='todo-item__text'>{task}</span>
      </label>
      <Button className='todo-item__delete' text='Удалить' onClick={onClick} />
    </li>
  );
};

export default TodoItem;
