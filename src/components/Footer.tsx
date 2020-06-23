import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 48px;
  font-size: 12px;
  line-height: 48px;
  color: #fff;
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    Copyright 2020. 박수진. ALL RIGHTS RESERVED.
  </FooterContainer>
);

export default Footer;
