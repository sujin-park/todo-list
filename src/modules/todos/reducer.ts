import { TodosState, TodosAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_ORDER,
} from './actions';

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
    }),
  [UPDATE_TODO]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload.id ? { ...todo, ...payload } : todo
    ),
  [CHANGE_ORDER]: (state, { payload: { id, order } }) =>
    state.map(todo => (todo.id === id ? { ...todo, order } : todo)),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state: TodosState, { payload: id }) =>
    state.filter(todo => todo.id !== id),
});

export default todos;
