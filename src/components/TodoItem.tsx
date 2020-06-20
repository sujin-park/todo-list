import React from 'react';
import styled from 'styled-components';
import Checkbox from './common/Checkbox';
import Badge from './common/Badge';

interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  deadline: string;
}

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoItemContainer = styled.li`
  display: flex;
  width: 100%;
  padding: 16px 0;
`

const InnerContainer = styled.div`
  width: 100%;
  margin-left: 8px;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Content = styled.p`
  font-size: 12px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RemoveButton = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.lightGreyColor};
  cursor: pointer;
  margin-top: 8px;
`

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <TodoItemContainer>
      <Checkbox
        done={todo.done}
      />
      <InnerContainer>
        <Title>{ todo.title }</Title>
        <Content>{ todo.content }</Content>
      </InnerContainer>
      <ButtonContainer>
        <Badge />
        <RemoveButton
          onClick={handleRemove}
        >
          삭제
        </RemoveButton>
      </ButtonContainer>
    </TodoItemContainer>
  );
}

export default TodoItem;