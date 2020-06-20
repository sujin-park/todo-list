import React, { MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Container = styled.button`
  color: ${({ theme }) => theme.primaryColor};
  background: #fff;
  font-size: 12px;
  font-weight: bold;
  border: 0 none;
  cursor: pointer;
  outline: 0 none;
`;

const Button: React.FC<ButtonProps> = ({ children, type = 'button', onClick }) => (
  <Container type={type} onClick={onClick}>
    {children}
  </Container>
)

export default Button;