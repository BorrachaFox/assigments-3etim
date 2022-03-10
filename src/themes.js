import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#F2F2F2',
  fonstColor: '#000',
};

export const darkTheme = {
  body: '#121212',
  fontColor: '#F2F2F2',
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.body};
  }
`
