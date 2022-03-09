import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
        <h1>Tarefas</h1>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
