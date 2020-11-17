import styled from 'styled-components'

export const StyledList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  color: white;
  margin-top: 20px;
`

export const StyledItem = styled.div`
  box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.colors.ThirdDarkColor};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.ThirdDarkColor};
  color: white;
  padding: 10px;
  font-size: 1rem;
  font-size: 1.1em;
  border-radius: 5px;
`

export const StyledSingleItem = styled(StyledItem)`
  background-color: ${({ theme }) => theme.colors.FourthDarkColor};
  color: whitesmoke;
  > * {
    padding: 10px;
  }
`