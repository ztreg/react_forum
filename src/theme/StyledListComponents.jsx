import styled from 'styled-components'

export const StyledList = styled.div`
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0.1fr, 1fr));
  grid-gap: 20px;
  color: white;
  margin-top: 20px;
`

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.ThirdDarkColor};
  color: white;
  padding: 10px;
  font-size: 1rem;
  font-size: 1.1em;
  border-radius: 5px;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const StyledDetailsItem = styled(StyledItem)`
  background-color: ${({ theme }) => theme.colors.someBlueGrey1};

  align-items: center;
  > * {
    width: 60%;
    @media(max-width: 600px) {
      width: 90%;
    }
  }
  h2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border-bottom: 1px solid white;
    text-align: center;
    padding: 10px 20px 30px;
  }
  h1 {
    @media(max-width: 500px) {
      font-size: 1.5em;
    }
  }
  .content {
    border-bottom: 1px solid white;
    padding: 10px 20px 30px;
  }
  .postInfo {
    padding: 10px 20px 30px;
    text-align: right;
    font-weight: 100; 
  }

  color: whitesmoke;

`
export const StyledNewsListItem = styled(StyledDetailsItem)`
  background-color:  ${({ theme }) => theme.colors.someBlueGrey};
  h2 {
    all: unset;
  }
  display: grid; 
   grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
   @media(max-width: 1580px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   }

  .sidePart, .mainPart {
    margin: 0 auto;
    > * {
      margin: 5px; 
    }
  }
  
`

export const StyledMessageItem = styled(StyledItem) `
    float: ${props => props.position || 'right'};
`
