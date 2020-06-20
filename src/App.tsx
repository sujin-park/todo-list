import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/GlobalStyle';
import Theme from './style/Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoApp from './pages/TodoApp';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <Header/>
      <TodoApp/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
