import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body{
  margin: 0;
  background-color: #ededeb;
  font-family:  "Source Code Pro", sans-serif; ;
}

a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button, input  {
  font-family: inherit;
}
`;
