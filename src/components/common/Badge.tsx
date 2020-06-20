import React from 'react';
import styled from 'styled-components';

const BadgeContainer = styled.div`
  width: 60px;
  height: 24px;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  color: #fff;
  background-color: ${({ theme }) => theme.redColor};
  border-radius: 15px;
  text-align: center;
`;

const Badge: React.FC = ({ children }) => (
  <BadgeContainer>
    {children}
  </BadgeContainer>
)

export default Badge;