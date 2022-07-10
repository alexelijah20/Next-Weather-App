import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Nunito", sans-serif;
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
  background: #C41E3A;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 4px;
}
`

