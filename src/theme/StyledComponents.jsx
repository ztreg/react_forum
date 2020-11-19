import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 30px;
  @media(max-width: 400px) {
    padding: 5px
  }
`

export const StyledNavBar = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  display: grid;
  border-radius: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  background-color:${({theme}) => theme.colors.SecondaryDarkColor};
  font-size: 1.3em;
  a {
    :hover {
      background-color: ${(props) => props.theme.colors.ThirdDarkColor};
    }
    text-align: center;
  }
  .userBox {
    text-align: center;
  }

`
export const StyledLoginBox = styled.div`
  background-color:${({theme}) => theme.colors.SecondaryDarkColor};
  border-radius: 5px;
  width: 400px;
  padding: 10px;
  box-shadow: 5px 5px 10px 5px #1c0442;
  text-align: center;
  margin: 0 auto;
`

export const StyledInputLogin = styled.div`
  font-size: 1.1em;
  padding: 20px;
  
  input {
    background-color: inherit;
    color: white;
    margin: 0 auto;
    opacity: 0.8;
    border: 2px solid white;
    border-radius: 5px;
    display: block;
    padding: 10px;
  }
`
export const StyledPrimaryButton = styled.button`
  padding: 10px;
  background-color: ${({theme})=>theme.colors.ThirdDarkColor};
  color: white;
  outline: none;
  font-size: 1.2rem;
  border: none;
  border-radius: 15px;
  display: inline-block;
  &:hover{
    cursor: pointer;
    background-color: ${({theme})=>theme.colors.MainDarkColor};
  }
  :focus {
    outline: none;
  }
`

export const StyledReadMoreButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: darkred;
  color: white;
  padding: 10px;
  font-size: 1.1em;
`