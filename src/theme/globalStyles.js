const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}  
body {
  background-color: ${(props) => props.theme.colors.MainDarkColor};
  color: white;
  font-family: ${(props) => props.theme.fonts.text}
}

a {
  color: white;
}

h1 {
  margin-bottom: 20px;
}
`

export default GlobalStyle