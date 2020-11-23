import styled from 'styled-components'
import { StyledDetailsItem } from './StyledListComponents'
export const MainContainer = styled.div`
  
  padding: 30px;
  @media(max-width: 400px) {
    padding: 5px
  }
`

export const StyledNavBar = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0 20px 0;
  display: grid;
  border-radius: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  @media(max-width: 470px) {
    width: 100%;
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
  border-radius: 15px;
  background-color: red;
  color: white;
  padding: 10px;
  font-size: 1.1em;
  cursor: pointer;
  margin: 10px;
`
export const StyledHomePage = styled.div`
  background-color: ${({theme})=>theme.colors.FourthDarkColor};
  padding: 40px;
  width: 100%;
  height: auto;
  text-align: center;
`

export const StyledHero = styled.div `
  background-image: url(${props => props.image});
  width: 100%;
  height: 150px;
  margin: 10px 0;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  @media(max-width: 400px) {
    font-size: 2em;
  }

`