import { createAction } from 'typesafe-actions';
import { Todo } from './types';

export const ADD_TODO = 'todos/ADD_TODO';
export const UPDATE_TODO = 'todos/UPDATE_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';
export const CHANGE_ORDER = 'todos/CHANGE_ORDER';

export const addTodo = createAction(ADD_TODO)<Todo>();
export const updateTodo = createAction(UPDATE_TODO)<Todo>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
export const changeOrder = createAction(CHANGE_ORDER)<{
  id: number;
  order: number;
}>();
