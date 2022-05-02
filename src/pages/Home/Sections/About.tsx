import styled from "styled-components";
import {Heading, SubTitle, Title} from "../../../components/Text";
import carImage from '../../../assets/images/car.svg'
import Button from "../../../components/Button";
import {SectionContainer} from "./index";

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   align-items: center;
   justify-content: center;
   max-width: 100%;
   height: 100%;
   padding: 10px;
`
const Content = styled.div`
  
`
const ContentImage = styled.img`
   width: 100%;
   object-fit: cover;
`
const AboutSection = () => {
   // @ts-ignore
   return <SectionContainer dark id="about">
      <Wrapper>
         <Content>
            <Title>Premium Bank</Title>
            <Heading>Unlimited Transactions With Zero fees</Heading>
            <SubTitle>
               Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees
            </SubTitle>

            <Button>Get Started</Button>
         </Content>
         <ContentImage src={carImage}/>
      </Wrapper>
   </SectionContainer>
}


export default AboutSection