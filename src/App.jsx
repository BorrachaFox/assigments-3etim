import { useEffect, useState } from 'react';
import api from './services/api';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import { Card } from './components/card';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  
  color: ${(props) => props.theme.fontColor};

  h1 {
    margin: 20px 0;
  }

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
        <div className='assigment-list' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80vw'}}>
          {assigments?.map((assigment) => 
            <Card 
              key={assigment._id}
              data={assigment}
            />
          )}
        </div>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
