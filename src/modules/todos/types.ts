import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;

export interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  deadline?: string | undefined;
  order: number;
}

export type TodosState = Todo[];
