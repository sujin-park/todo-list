import React, { useCallback } from 'react';
import { Todo } from '../modules/todos';
import update from 'immutability-helper';

import styled from 'styled-components';
import TodoItem from './TodoItem';
import DraggedContainer from './common/DraggedItem';

interface TodoListProps {
  todos: Todo[];
  onUpdate: (todo: Todo) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onChangeOrder: (todos: Todo[]) => void;
}

const TodoListContainer = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  list-style: none;
  padding: 0 2px;
`;

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onUpdate,
  onToggle,
  onRemove,
  onChangeOrder,
}) => {
  const moveCard = useCallback(
    (dragId: number, dragIndex: number, hoverIndex: number) => {
      const dragItem = todos[dragIndex];

      onChangeOrder(
        update(todos, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragItem],
          ],
        })
      );
    },
    [onChangeOrder, todos]
  );

  return (
    <TodoListContainer>
      {todos.map((todo, index) => (
        <DraggedContainer
          key={todo.id}
          id={todo.id}
          index={index}
          moveCard={moveCard}>
          <TodoItem
            todo={todo}
            onUpdate={onUpdate}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </DraggedContainer>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
