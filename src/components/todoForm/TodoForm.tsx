import { useState } from 'react';
import './todoForm.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/actions';
import Button from '../button/Button';

const TodoForm = () => {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (task.trim()) {
      dispatch(
        addTodo({
          id,
          task,
          completed: false,
        })
      );
    }
    setTask('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <div className='todo-form__field'>
        <label htmlFor='add-task' className='todo-form__label'>
          Добавить задачу
        </label>
        <input
          type='text'
          id='add-task'
          name='task'
          value={task}
          onChange={handleChange}
          className='todo-form__input'
          required
          placeholder='Введите задачу'
        />
      </div>
      <Button className={'todo-form__btn'} text={'Добавить'} />
    </form>
  );
};

export default TodoForm;
