import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  done: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxContainer = styled.input.attrs({
  type: 'checkbox',
})`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 4px 16px 0 0;
  border: solid 1px rgba(#ccc, 0.7);
  background-color: #fff;
  box-sizing: border-box;

  &:checked {
    background: url('../../assets/icon/checkbox.svg') center no-repeat;
    background-size: contain;
    border: 0 none;
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ done, onChange }) => {
  return <CheckboxContainer checked={done} onChange={onChange} />;
};

export default Checkbox;
