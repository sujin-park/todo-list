import React, { useState } from 'react';
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
import Nav from '../components/Nav';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

interface TodoAppProps {
  toggleTheme: () => void;
}

const TodoAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.contents};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 32px 16px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    max-width: 800px;
    margin: 48px auto 32px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
`;

const Alarm = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary};
`;

const TodoApp: React.FC<TodoAppProps> = ({ toggleTheme }) => {
  const [type, setType] = useState('todo');

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const nextId = todos.length + 1;

  const navigations = [
    {
      type: 'todo',
      icon: 'StarIcon',
      title: 'Things to do',
    },
    {
      type: 'archive',
      icon: 'ArchiveIcon',
      title: 'Archive',
    },
  ];

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

  const navigationType = navigations.find(nav => nav.type === type);
  const selectedTodos = todos.filter(todo =>
    type === 'todo' ? !todo.done : todo.done
  );

  const List = () => (
    <>
      <Title>
        {navigationType!.title}
        {selectedTodos.length > 0 && (
          <Alarm>
            할 일 {selectedTodos.length}개 {type === 'todo' ? '남음' : '완료'}
          </Alarm>
        )}
      </Title>
      {type === 'todo' && <TodoForm id={nextId} onInsert={onInsert} />}
      <TodoList
        todos={selectedTodos}
        onUpdate={onUpdate}
        onToggle={onToggle}
        onRemove={onRemove}
        onChangeOrder={onChangeOrder}
      />
    </>
  );

  return (
    <TodoAppContainer>
      <Nav
        navigations={navigations}
        onChange={setType}
        toggleTheme={toggleTheme}
      />
      <ListContainer>
        <List />
      </ListContainer>
    </TodoAppContainer>
  );
};

export default TodoApp;
