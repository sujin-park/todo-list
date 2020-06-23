import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/GlobalStyle';
import Theme from './style/Theme';
import Footer from './components/Footer';
import TodoApp from './pages/TodoApp';

// drag & drop library
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        <TodoApp />
      </DndProvider>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
