import styled from 'styled-components'

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

.countryDropdown {
  background: ${({theme})=>theme.colors.SecondaryDarkColor};
  color: white;
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