import { useEffect, useState } from 'react';
import api from './services/api'

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState('dark');
  const [assigments, setAssigiments] = useState([]);

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    api.get('/').then(({data}) => {
      setAssigiments(data)
      console.log(data)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, [])
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
        <h1>Tarefas</h1>
        <div className='assigment-list'>
          {assigments?.map((assigment) => 
            <div key={assigment}>
              <p>title: {assigment.title}</p>
              <p>description: {assigment.description}</p>
              <hr/>
            </div>
          )}
        </div>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
