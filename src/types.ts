export interface Todo {
  id: string;
  task: string;
  completed?: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export interface State {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

// actions

export interface AddTodoAction {
  type: 'ADD_TODO';
  payload: Todo;
}

export interface RemoveTodoAction {
  type: 'REMOVE_TODO';
  payload: string;
}

export interface SetTodoAction {
  type: 'SET_TODOS';
  payload: Todo[];
}

export interface SetFiltersAction {
  type: 'SET_FILTERS';
  payload: Filter;
}

export interface CompletedTodoAction {
  type: 'COMPLETED_TODO';
  payload: string;
}

export type Action =
  | AddTodoAction
  | RemoveTodoAction
  | SetTodoAction
  | SetFiltersAction
  | CompletedTodoAction;
