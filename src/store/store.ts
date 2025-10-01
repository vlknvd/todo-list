import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducer/reducer';

const persistedState = JSON.parse(
  localStorage.getItem('todos_state') || 'null'
);

const store = configureStore({
  reducer: todoReducer,
  preloadedState: persistedState || undefined,
});

export default store;
