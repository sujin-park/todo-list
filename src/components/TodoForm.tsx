import React, { FormEvent, useRef } from 'react';
import styled from 'styled-components';

import { Todo } from '../modules/todos';
import Input from './common/Input';
import Textarea from './common/Textarea';
import Datepicker from './common/Datepicker';
import Button from './common/Button';
import Checkbox from './common/Checkbox';

import useTodoState from '../hooks/useTodoState';

interface TodoFormProps {
  id: number;
  onInsert: (todo: Todo) => void;
}

const TodoFormContainer = styled.form`
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

const TodoForm: React.FC<TodoFormProps> = ({ id, onInsert }) => {
  const ref = useRef<HTMLInputElement>(null);

  const [state, onChange, onChangeDate, onReset] = useTodoState({
    title: '',
    content: '',
    deadline: '',
    done: false,
  });

  const isEmptyValue = !state.title || !state.content;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!state.title) {
      ref.current?.focus();
      return;
    }

    onInsert({
      ...state,
      id,
      order: id,
    });

    onReset();
  };

  return (
    <TodoFormContainer onSubmit={handleSubmit}>
      <Checkbox done={state.done} onChange={() => {}} />
      <InputContainer>
        <Input
          ref={ref}
          name="title"
          placeholder="제목을 입력해주세요."
          value={state.title}
          onChange={onChange}
        />
        <Textarea
          name="content"
          placeholder="내용을 입력해주세요."
          value={state.content}
          onChange={onChange}
        />
        <Datepicker
          disabled={false}
          value={state.deadline}
          onChange={onChangeDate}
        />
      </InputContainer>
      <Button disabled={isEmptyValue} onClick={handleSubmit}>
        추가
      </Button>
    </TodoFormContainer>
  );
};

export default TodoForm;
