import React from 'react';
import styled from 'styled-components';
import { StarFilled, BookFilled } from '@ant-design/icons';

import Switch from './common/Switch';

interface NavItem {
  type: string;
  icon: string;
  title: string;
}

interface NavProps {
  navigations: NavItem[];
  onChange: (key: string) => void;
  toggleTheme: () => void;
}

const NavContainer = styled.nav`
  flex: 0 0 160px;
  padding-right: 24px;
  box-sizing: border-box;
`;

const NavItem = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0;
  cursor: pointer;
`;

const StarIcon = styled(StarFilled)`
  font-size: 16px;
  font-weight: bold;
  color: #fec500;
  margin-right: 5px;
`;

const ArchiveIcon = styled(BookFilled)`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-right: 6px;
`;

const Nav: React.FC<NavProps> = ({ navigations, onChange, toggleTheme }) => (
  <NavContainer>
    <Switch toggleTheme={toggleTheme} />
    {navigations.map(item => (
      <NavItem key={item.type} onClick={() => onChange(item.type)}>
        {item.type === 'todo' ? <StarIcon /> : <ArchiveIcon />}
        {item.title}
      </NavItem>
    ))}
  </NavContainer>
);

export default Nav;
