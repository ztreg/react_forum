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
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  background-color:${({theme}) => theme.colors.MainDarkColor};
  
  font-size: 1.3em;
  
  .userBox {
    display: flex;
    justify-content: flex-end;
  }
`

export const StyledForm = styled.div`
.createCustomerForm {
  box-shadow: 5px 5px 15px 5px #000000;
  width: 50%;
  min-width: 380px;
  background: black;
  padding: 20px;
  font-size: 1.1em;
  border-radius: 5px;
  background: ${({theme})=>theme.colors.SecondaryDarkColor};
}
.flexOuter li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5px;
}

.flexOuter label {
  color: white;
}

.flexOuter input {
  border-radius: 5px;
  border: 2px solid ${({theme})=>theme.colors.MainDarkColor};
  color: white;
  background: ${({theme})=>theme.colors.SecondaryDarkColor};
  ::placeholder {
      opacity: 0.6;
      color: white;
    /* font-size: em; */
  }
  :last-child {
    margin-bottom: 20px;
  }
  :focus {
    outline: none;
  }
}

.flexOuter > li > label {
  flex: 1 0 120px;
  max-width: 220px;
}

.flexOuter > li > label + * {
  flex: 1 0 180px;
  padding: 5px;
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
  background-color: ${({theme})=>theme.colors.thirdDarkColor};
  color: white;
  outline: none;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  display: inline-block;
  &:hover{
    cursor: pointer;
    background-color: ${({theme})=>theme.colors.mainDarkColor};
  }
  :focus {
    outline: none;
  }
  height: 50%;
  
`

export const StyledLoginBox = styled.div`
  
  border-radius: 5px;
  width: 400px;
  padding: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
  text-align: center;
  margin: 0 auto;
  
`