import styled from "styled-components";


export const Button = styled.button`
  font-size: 16px;
  font-family: serif;
  padding: 1em;
  color: ${props => props.primary?"white":"blue"};
  border: none;
  border-radius: 10px;
  background-color: ${props => props.primary?"black":"white"};
  outline: none;
  cursor: pointer;
`;

