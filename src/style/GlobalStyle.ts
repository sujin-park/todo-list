import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { ThemeType } from './Theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  ${reset};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({ theme }) => theme.colors.bg};
    font-family: 'NanumSquareRound';
  }
;`;
