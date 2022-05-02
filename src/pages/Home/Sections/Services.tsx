import {SectionContainer} from "./index";
import styled from "styled-components";
import {Heading, SubTitle} from "../../../components/Text";
import { Image } from "../../../components/Image";
import { getServices } from "../../../data/services";
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100%;
   padding: 30px;
   
`
const CardWrapper = styled.div`
   display: grid;
   max-width: 1000px;
   grid-template-columns: 1fr 1fr 1fr;
   margin: 0 auto;
   padding: 20px 20px;
   gap: 16px;
   @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      > * {
         &:last-child {
            grid-column: 1/3;
         }
      }
   }
   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      > * {
         &:last-child {
            grid-column: 1;
         }
      }
   }
`
const Card = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 10px;
   justify-content: center;
   align-items: center;
   background-color: white;
   border-radius: 9px;
   padding: 30px;
   max-height: 340px;
  
   
   transition: all 0.2s ease-in-out 0s;
   &:hover {
      transform: scale(0.97);
   }
`
const CardImage = styled(Image)`
   width: 160px;
   height: 160px;
`
const TextContent = styled(SubTitle)`
   color: black;
   text-align: center;
`

const Container = styled(SectionContainer)`
 
   @media screen and (max-width: 768px) {
      height: 1300px;
   }
`
const ServicesSection = () => {
   // @ts-ignore
   return <Container dark id="services">
      <Wrapper>
         <Heading>Services</Heading>

         <CardWrapper>
            {
               getServices.map((service,index) => {
                  return <Card key={index}>
                     <CardImage src={service.image} />
                     <Heading style={{
                        fontSize: "1rem",
                        color: "black"
                     }}>{service.title}</Heading>
                     <TextContent>{service.content}</TextContent>
                  </Card>
               })
            }
         </CardWrapper>
      </Wrapper>
   </Container>
}


export default ServicesSection