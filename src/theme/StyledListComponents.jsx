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
  /* box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.colors.ThirdDarkColor}; */

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.ThirdDarkColor};
  color: white;
  padding: 10px;
  font-size: 1rem;
  font-size: 1.1em;
  border-radius: 5px;
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
   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  .mainPart {
    margin: 0 auto;
  }

  .sidePart {
    margin: 0 auto;
  }
  
`
