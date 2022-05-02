import styled from "styled-components";
import savingImage from '../../../assets/images/saving.svg'
import {Heading, SubTitle, Title} from "../../../components/Text";
import Button from "../../../components/Button";
import {SectionContainer} from "./index";
import { Image } from "../../../components/Image";


const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   align-items: center;
   max-width: 100%;
   height: 860px;
   padding: 10px;
  
`
const Content = styled.div`
  padding: 20px;
`
const DiscoverSection = () => {
    return <SectionContainer id="discover">
      <Wrapper>
       <Image src={savingImage}/>
         <Content>
            <Title>Unlimited Access</Title>
            <Heading style={{color:"black"}}>Login to your account at any time</Heading>
            <SubTitle style={{color:"black"}}>
               We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.            </SubTitle>

            <Button dark>Learn More</Button>
         </Content>
      </Wrapper>
   </SectionContainer>
}


export default DiscoverSection