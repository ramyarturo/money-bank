import styled from "styled-components";


export const SectionContainer = styled.div`
  height: 860px;
  min-height: 100vh;
  padding: 20px;
  background: ${(props:any) => props.dark ? props.theme.colors.black : 'white'};
`

export {}