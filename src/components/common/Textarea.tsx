import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextareaProps {
  ref?: React.Ref<HTMLInputElement>;
  name: string;
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaContainer = styled.textarea`
  width: 100%;
  height: 48px;
  font-size: 12px;
  border: 0 none;
  outline: 0 none;
  box-sizing: border-box;
  padding: 4px 0;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
  resize: none;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:focus {
    border-bottom: solid 1px ${({ theme }) => theme.colors.primary};
  }

  &:read-only {
    color: ${({ theme }) => theme.colors.lightGrey};
    text-decoration: line-through;
    border: 0 none;
  }
`;

const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  placeholder,
  readOnly = false,
  onChange,
}) => {
  return (
    <TextareaContainer
      name={name}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textarea;
