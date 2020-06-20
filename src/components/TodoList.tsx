import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  deadline: string;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoListContainer = styled.ul`
  list-style: none;
`;

const EmptyContainer = styled.div`
  margin: 32px auto;
`;

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) return <EmptyContainer>등록된 할 일이 없습니다. 지금 할 일을 추가해보세요.</EmptyContainer>;
  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;