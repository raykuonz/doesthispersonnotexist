import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');

  html {
    box-sizing: border-box;
  }

  * {

    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }

  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Luckiest Guy', sans-serif;
    background-color: #518EA1;
    color: #0A0B05;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
  }
`

export default GlobalStyle;
