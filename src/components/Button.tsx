import styled from "styled-components";

const Button = styled.button`
  border-radius: 50px;
  background: ${({dark, theme}:any) => {
    return dark ? theme.colors.black : theme.colors.green
  }};
  color: white;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  text-decoration: none;
  &:hover {
    color: ${({dark, theme}:any) => {
      return dark ? theme.colors.white : theme.colors.black
    }};
    background-color: ${({dark, theme}:any) => {
      return dark ? theme.colors.green : theme.colors.white
    }};
  }
`

export default Button