import styled from "styled-components";
import React from "react";


const StyledVideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
 `


const VideoBg : React.FC<any> = (props) => {
    return <StyledVideoBg autoPlay loop muted {...props}/>
}

export default VideoBg