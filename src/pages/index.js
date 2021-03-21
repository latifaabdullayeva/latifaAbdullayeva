import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";
import HomeSection from "../components/landingPage/HomeSection";
import InfoSection from "../components/landingPage/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
} from "../components/landingPage/InfoSection/Data";
import Services from "../components/landingPage/Services";
import {
  homeObjThree,
  homeObjFour,
} from "../components/landingPage/Services/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services {...homeObjThree} />
      <Services {...homeObjFour} />
    </>
  );
};

export default Home;
