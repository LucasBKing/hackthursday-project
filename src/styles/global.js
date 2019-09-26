import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    span {
      font-size: 14px;
      color: #ccc;
      font-weight: bold;
    }
    h4 {
      margin-bottom: 0px;
    }
    h1 {
      font-weight: bold;
      color: #1F2656;
      font-size: 4.5rem;
    }
    hr {
      border: 0;
      clear:both;
      display:block;
      width: 100%;
      background-color: rgba(0,0,0,0.1);
      height: 1px;
      margin: 20px 0px;
    }
  }
`
export default GlobalStyle
