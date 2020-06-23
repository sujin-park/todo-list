import React, { MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Container = styled.button`
  display: block;
  width: 48px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  font-size: 12px;
  font-weight: bold;
  border: 0 none;
  cursor: pointer;
  outline: 0 none;
  &:disabled {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
}) => (
  <Container type={type} disabled={disabled} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
