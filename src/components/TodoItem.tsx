import React, { useRef } from 'react';
import styled from 'styled-components';
import { Todo } from '../modules/todos';

import Checkbox from './common/Checkbox';
import Badge from './common/Badge';
import Input from './common/Input';
import Button from './common/Button';
import Datepicker from './common/Datepicker';

import Textarea from './common/Textarea';
import dayjs, { Dayjs } from 'dayjs';
import useTodoState from '../hooks/useTodoState';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItemContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 16px 8px;
  box-sizing: border-box;

  &:hover {
    border-radius: 4px;
    transition: box-shadow 0.5s;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const InputContainer = styled.div`
  width: 100%;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onUpdate,
  onToggle,
  onRemove,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const [state, onChange] = useTodoState({
    title: todo.title,
    content: todo.content,
    deadline: todo.deadline,
    done: todo.done,
  });

  const calculateDday = () => {
    const today = dayjs(new Date());
    const deadline = dayjs(state.deadline);
    return today.diff(deadline, 'day');
  };

  const dDay = state.deadline ? calculateDday() : 0;

  const handleUpdate = () => {
    onUpdate({
      ...todo,
      ...state,
    });
  };

  const handleChangeDate = (date: Dayjs | null, dateString: string) => {
    onUpdate({
      ...todo,
      deadline: dateString,
    });
  };

  return (
    <TodoItemContainer>
      <Checkbox done={state.done} onChange={() => onToggle(todo.id)} />
      <InputContainer>
        <Input
          ref={ref}
          name="title"
          value={state.title}
          readOnly={state.done}
          onChange={onChange}
          onBlur={handleUpdate}
        />
        <Textarea
          name="content"
          placeholder="내용을 입력해주세요."
          value={state.content}
          readOnly={state.done}
          onChange={onChange}
          onBlur={handleUpdate}
        />
        {!state.done && (
          <DateContainer>
            <Datepicker
              value={state.deadline}
              disabled={state.done}
              highlight={dDay > 0}
              onChange={handleChangeDate}
            />
            {!state.done && dDay > 0 && <Badge>{dDay}일 지남</Badge>}
          </DateContainer>
        )}
      </InputContainer>
      <Button onClick={() => onRemove(todo.id)}>삭제</Button>
    </TodoItemContainer>
  );
};

export default TodoItem;
