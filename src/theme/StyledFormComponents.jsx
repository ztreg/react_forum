import styled from 'styled-components'

export const StyledForm = styled.div`
  box-shadow: 5px 5px 15px 5px #000000;
  width: 50%;
  margin: 0 auto;
  min-width: 340px;
  padding: 20px;
  font-size: 1.1em;
  border-radius: 5px;
  background: ${({theme})=>theme.colors.SecondaryDarkColor};
  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 5px;
  }

  label {
    color: white;
  }

  input {
    border-radius: 5px;
    border: 2px solid ${({theme})=>theme.colors.MainDarkColor};
    color: white;
    background: ${({theme})=>theme.colors.SecondaryDarkColor};
    ::placeholder {
        opacity: 0.6;
        color: white;
    }
    :last-child {
      margin-bottom: 20px;
    }
  }

  .countryDropdown {
    background: ${({theme})=>theme.colors.SecondaryDarkColor};
    color: white;
  }

  li > label {
    flex: 1 0 120px;
    max-width: 220px;
  }
  li > label + * {
    flex: 1 0 180px;
    padding: 5px;
  }
`

export const StyledReplyForm = styled(StyledForm)`
  
`
