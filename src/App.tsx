import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Theme from './style/Theme';

const App: React.FC = () => (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
      </BrowserRouter>
    </ThemeProvider>
);

export default App;
