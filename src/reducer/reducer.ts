import type { State, Action } from '../types';

const initialState: State = {
  todos: [],
  filter: 'all',
};

const saveToLocalStorage = (state: State) => {
  localStorage.setItem('todos_state', JSON.stringify(state));
};

const todoReducer = (state = initialState, action: Action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TODO':
      newState = { ...state, todos: [...state.todos, action.payload] };
      saveToLocalStorage(newState);
      return newState;
    case 'REMOVE_TODO':
      newState = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      saveToLocalStorage(newState);
      return newState;
    case 'SET_TODOS':
      newState = { ...state, todos: action.payload };
      saveToLocalStorage(newState);
      return newState;
    case 'SET_FILTERS':
      newState = { ...state, filter: action.payload };
      saveToLocalStorage(newState);
      return newState;
    case 'COMPLETED_TODO':
      newState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      saveToLocalStorage(newState);
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
