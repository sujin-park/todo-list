import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Todo } from '../modules/todos';

import Checkbox from './common/Checkbox';
import Badge from './common/Badge';
import Input from './common/Input';
import Button from './common/Button';
import Datepicker from './common/Datepicker';

import Textarea from './common/Textarea';
import dayjs, { Dayjs } from 'dayjs';

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
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
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
  const calculateDday = () => {
    const today = dayjs(new Date());
    const deadline = dayjs(todo.deadline);
    return today.diff(deadline, 'day');
  };

  const dDay = todo.deadline ? calculateDday() : 0;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeDate = (date: Dayjs | null, dateString: string) => {
    onUpdate({
      ...todo,
      deadline: dateString,
    });
  };

  return (
    <TodoItemContainer>
      <Checkbox done={todo.done} onChange={() => onToggle(todo.id)} />
      <InputContainer>
        <Input
          name="title"
          value={todo.title}
          readOnly={todo.done}
          onChange={onChange}
        />
        <Textarea
          name="content"
          placeholder="내용을 입력해주세요."
          value={todo.content}
          readOnly={todo.done}
          onChange={onChange}
        />
        {!todo.done && (
          <DateContainer>
            <Datepicker
              value={todo.deadline}
              disabled={todo.done}
              highlight={dDay > 0}
              onChange={onChangeDate}
            />
            {!todo.done && dDay > 0 && <Badge>{dDay}일 지남</Badge>}
          </DateContainer>
        )}
      </InputContainer>
      <Button onClick={() => onRemove(todo.id)}>삭제</Button>
    </TodoItemContainer>
  );
};

export default TodoItem;
