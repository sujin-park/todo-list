
import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  done: boolean;
}

const CheckboxContainer = styled.div`
  width: 30px;
  height: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
`;

const Checkbox: React.FC<CheckboxProps> = ({ done }) => {
  return (
    <CheckboxContainer/>
  );
}

export default Checkbox;