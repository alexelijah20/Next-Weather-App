import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Roboto", sans-serif;
  color: #242424;
  margin: 0;
}

* {
   box-sizing: border-box;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #0B0A07;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 4px;
}
`

export default GlobalStyle
