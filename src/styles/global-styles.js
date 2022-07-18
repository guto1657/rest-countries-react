import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

body {
  background: hsl(0, 0%, 98%);
  transition: background 0.2s linear;
}

body.dark {
  background: hsl(207, 26%, 17%);
  transition: background 0.2s linear;
}

`;
