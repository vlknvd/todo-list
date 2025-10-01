import './App.css';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoList/TodoList';
import Filters from './components/filters/Filters';

function App() {
  return (
    <div className='todo'>
      <div className='container'>
        <div className='todo__content'>
          <h1 className='todo__title'>Список задач:</h1>
          <TodoForm />
          <Filters />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
