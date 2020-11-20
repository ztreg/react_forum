import styled from "styled-components";

export const StyledAlertBox = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: white;
  margin-bottom: 15px;
  display: none;

  input[type=button] {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s; 
    :hover {
      color: black;
    }
  }

`

export const StyledVerticalLine = styled.span`
  max-width: 1px;
  height: 400px;
  margin: 0 auto;
  background-color: white;
  @media(max-width: 930px) {
    display: none;
  }
  @media(max-width: 820px) {
    display: block;
    max-height: 1px;
    width: 100%;
  }

`

// export const StyledHorizontalLine = styled.span`
//   max-height: 1px;
//   width: 100%;
//   @media(min-width: 1100px) {
//       display: none;
//      }
// `