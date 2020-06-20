import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
}

const InputContainer = styled.input`
  border: 0 none;
  outline: 0 none;
`;

const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <InputContainer
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    />
  );
}

export default Input;