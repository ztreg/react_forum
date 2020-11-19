const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}  
body {
  background-color: ${(props) => props.theme.colors.mainWhite};
  color: white;
  font-family: ${(props) => props.theme.fonts.text}
}

a {
  color: ${(props) => props.theme.colors.mainWhite};
  text-decoration: none;
}

h1 {
  margin-bottom: 20px;
}
`

export default GlobalStyle