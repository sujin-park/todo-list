import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import Button from '../components/common/Button';

interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  deadline: string;
}

const TodoAppContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 800px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 96px auto 32px;
  padding: 32px 16px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: solid 1px ${({ theme }) => theme.lightGreyColor};
  margin-bottom: 16px;
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`
const TodoApp: React.FC = () => {
  const todos: Todo[] = [];

  const onToggle = (id: number) => {
    // todo: toggle
  };

  const onRemove = (id: number) => {
    // todo: remove
  };

  const onAdd = () => {

  };

  return (
    <TodoAppContainer>
      <TitleContainer>
        <Title>Things to do</Title>
        <Button onClick={onAdd}>추가하기 +</Button>
      </TitleContainer>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
      ></TodoList>
    </TodoAppContainer>
  );
}

export default TodoApp;