import { HeaderDiv } from './style';

import Context from '../../providers/context/ThemeContext';
import { useContext } from 'react';

export const Header = (props) => {
  const [theme, setTheme] = useContext(Context)

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }

  return(
    <HeaderDiv>
      <h1>{ props.title } <span className='beta'>BETA</span></h1>
      <label className="switch">
        <input type="checkbox" onClick={themeToggler}></input>
        <span className="slider round"></span>
      </label>
    </HeaderDiv>
  )
}
