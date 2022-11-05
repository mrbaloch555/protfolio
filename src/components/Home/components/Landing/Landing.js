import React from "react";
import "./landing.scss";
import { Typography } from "antd";
const { Title } = Typography;

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-image">
        <div className="landing-into">
          <Title level={1} className="title">
            <span>Full Stack Web Developer</span>
            <br></br>
            <span>&</span>
            <br></br>
            <span>Data Sceintist</span>
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Landing;
