import React, { useState } from "react";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HomeElements";
import Video from "../../../videos/video.mp4";
import { Button } from "../../ButtonElements";

const HomeSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay muted src={Video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH1>Hi! My name is Latifa</HomeH1>
        <HomeP>
          I'm a Software Developer from Azerbaijan. I am passionate about
          writing articles on Artificial Intelligence, Internet of Things,
          Development, User Experience, and more.
        </HomeP>
        <HomeBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Let's Start {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
