import styled from "styled-components";


export const Image = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height};
  object-fit: cover;
`