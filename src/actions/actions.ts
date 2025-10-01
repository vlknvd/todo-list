import type {
  AddTodoAction,
  CompletedTodoAction,
  Filter,
  RemoveTodoAction,
  SetFiltersAction,
  SetTodoAction,
  Todo,
} from '../types';

export const addTodo = (todo: Todo): AddTodoAction => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const removeTodo = (todoId: string): RemoveTodoAction => ({
  type: 'REMOVE_TODO',
  payload: todoId,
});

export const setTodos = (todos: Todo[]): SetTodoAction => ({
  type: 'SET_TODOS',
  payload: todos,
});

export const setFilters = (filter: Filter): SetFiltersAction => ({
  type: 'SET_FILTERS',
  payload: filter,
});

export const completedTodo = (id: string): CompletedTodoAction => ({
  type: 'COMPLETED_TODO',
  payload: id,
});
