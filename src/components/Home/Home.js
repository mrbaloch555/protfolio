import React from "react";
import Contact from "../Contact/Contact";
import Projects from "../Projects";
import Skills from "../Skills";
import About from "./components/About";
import Introduction from "./components/Introduction/Introduction";
import Landing from "./components/Landing";
import { useMediaQuery } from "react-responsive";
const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "hidden !important" }}
    >
      <Landing></Landing>
      <Introduction></Introduction>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
