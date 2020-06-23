import React from 'react';
import styled from 'styled-components';

const BadgeContainer = styled.div`
  display: flex;
  width: 60px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
  text-align: center;
  margin-left: 8px;
`;

const Badge: React.FC = ({ children }) => (
  <BadgeContainer>{children}</BadgeContainer>
);

export default Badge;
