import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
  toggleTodo,
  removeTodo,
  addTodo,
  changeOrder,
  updateTodo,
} from '../modules/todos';
import { Todo } from '../modules/todos';

import styled from 'styled-components';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const TodoAppContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100vh;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 0 8px 0 rgba(#000, 0.04);
  margin: 48px auto 32px;
  padding: 32px 16px;
`;

const Title = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: solid 1px ${({ theme }) => theme.lightGreyColor};
  box-sizing: border-box;
`;

const Alarm = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.primaryColor};
`;

const TodoApp: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const notCompletedTodos = todos.filter(todo => !todo.done);
  const completedTodos = todos.filter(todo => todo.done);

  const onChangeOrder = (todos: Todo[]) => {
    dispatch(changeOrder(todos));
  };

  const onInsert = (todo: Todo) => {
    dispatch(addTodo(todo));
  };

  const onUpdate = (todo: Todo) => {
    dispatch(updateTodo(todo));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <TodoAppContainer>
      <Title>
        Things to do
        {notCompletedTodos.length > 0 && (
          <Alarm>할 일 {notCompletedTodos.length}개 남음</Alarm>
        )}
      </Title>
      <TodoForm id={todos.length + 1} onInsert={onInsert} />
      <TodoList
        todos={notCompletedTodos}
        onUpdate={onUpdate}
        onToggle={onToggle}
        onRemove={onRemove}
        onChangeOrder={onChangeOrder}
      />
      {completedTodos.length > 0 && (
        <>
          <Title>Archive</Title>
          <TodoList
            todos={completedTodos}
            onUpdate={onUpdate}
            onToggle={onToggle}
            onRemove={onRemove}
            onChangeOrder={onChangeOrder}
          />
        </>
      )}
    </TodoAppContainer>
  );
};

export default TodoApp;
