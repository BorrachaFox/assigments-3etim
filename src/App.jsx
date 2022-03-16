import { useState } from 'react';

import Context from './providers/Context';

import { StyledApp } from './style'
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import { GlobalStyles } from './styles/global';
import { AssigmentList } from './components/AssigmentList'
import { FormCard } from './components/FormCard';
import { Header } from './components/Header';

function App() {
  const [theme, setTheme] = useState('light');
  const [renderView, setRenderView] = useState(1);

  return (
    <Context.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <StyledApp>
          <Header title="Tarefas"/>
          {renderView === 1 && <AssigmentList/>}
          {renderView === 2 && <FormCard/>}
        </StyledApp>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
