import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html { font-family: 'Work Sans', sans-serif; font-size: 14px;}
  * { box-sizing: border-box; }
  body {
    background: #FFFEF0;
    min-height: 100vh;
    position: relative;
  }
`

export default GlobalStyle
