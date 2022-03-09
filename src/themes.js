import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#F2F2F2',
  fonstColor: '#000',
};

export const darkTheme = {
  body: '#222222',
  fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${(props) => props.theme.body};
  }
`
