import React from "react";
import Contact from "../Contact/Contact";
import Projects from "../Projects";
import Skills from "../Skills";
import About from "./components/About";
import Introduction from "./components/Introduction/Introduction";
import Landing from "./components/Landing";

const Home = () => {
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
