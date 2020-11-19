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
  height: 300px;
  margin: 0 auto;
  background-color: white !important;
  
`