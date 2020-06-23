import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import useTheme from './hooks/useTheme';

import Footer from './components/Footer';
import TodoApp from './pages/TodoApp';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DndProvider backend={HTML5Backend}>
        <TodoApp toggleTheme={toggleTheme} />
        <Footer />
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;
