import styled from "styled-components";
import VideoBg from "../../../components/VideoBg";
import {Heading, SubTitle} from "../../../components/Text";
import Button from "../../../components/Button";
import video from '../../../assets/video.mp4'
const SectionContainer = styled.div`
    height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    
`
const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
const MainWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
   z-index: 2;
`

const MainSection = () => {
     return <SectionContainer>
         <VideoWrapper>
             <VideoBg src={video} type="video/mp4"/>
         </VideoWrapper>
            <MainWrapper>
                <Heading>Virtual Banking Made Easy
                </Heading>
                <SubTitle>Sign up for a new account today and receive $250 in credit towards your next payment.</SubTitle>
                <Button>Get Started</Button>
            </MainWrapper>

    </SectionContainer>
}


export default MainSection