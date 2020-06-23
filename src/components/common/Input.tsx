import React, { forwardRef, ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  ref?: React.Ref<HTMLInputElement>;
  name: string;
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const InputContainer = styled.input`
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  border: 0 none;
  outline: 0 none;
  box-sizing: border-box;
  margin-bottom: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

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

const Input: React.FC<InputProps> = forwardRef(
  ({ name, value, placeholder, readOnly = false, onChange, onBlur }, ref) => {
    return (
      <InputContainer
        type="text"
        ref={ref}
        name={name}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  }
);

export default Input;
