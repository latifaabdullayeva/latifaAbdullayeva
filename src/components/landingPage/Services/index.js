import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  BtnWrap,
} from "./ServicesElements";
import { Button } from "../../ButtonElements";

const Services = ({
  id,
  lightBg,
  lightText,
  heading,
  icon1,
  icon2,
  icon3,
  heading1,
  text1,
  heading2,
  text2,
  heading3,
  text3,
  buttonLabel,
  primary,
  dark,
  dark2,
}) => {
  return (
    <ServicesContainer lightBg={lightBg} id={id}>
      <ServicesH1 lightText={lightText}>{heading}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>{heading1}</ServicesH2>
          <ServicesP>{text1}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>{heading2}</ServicesH2>
          <ServicesP>{text2}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>{heading3}</ServicesH2>
          <ServicesP>{text3}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <BtnWrap>
        <Button
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dark2={dark2 ? 1 : 0}
        >
          {buttonLabel}
        </Button>
      </BtnWrap>
    </ServicesContainer>
  );
};

export default Services;
