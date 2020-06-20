import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 48px;
  color: ${({ theme }) => theme.blackColor};
  box-sizing: border-box;
  border-bottom: solid 1px ${({ theme }) => theme.lightGreyColor};
`;

const InnerContainer = styled.div`
  width: ${({ theme }) => theme.maxWidth};
  font-size: 20px;
  line-height: 48px;
  font-weight: bold;
  text-align: center;
`;

const Header: React.FC = () => {
  return (
      <HeaderContainer>
        <InnerContainer>
          TODO LIST
        </InnerContainer>
      </HeaderContainer>
  )
}

export default Header;