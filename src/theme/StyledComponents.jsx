import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 30px;
`

export const StyledNavBar = styled.div`
  text-decoration: none;
  width: 100%;
  padding: 30px;
  display: grid;
  border-radius: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  background-color:${({theme}) => theme.colors.SecondaryDarkColor};
  font-size: 1.3em;
  
  .userBox {
    display: flex;
    justify-content: flex-end;
  }
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

export const StyledLoginBox = styled.div`
  
  border-radius: 5px;
  width: 400px;
  padding: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
  text-align: center;
  margin: 0 auto;
  
`