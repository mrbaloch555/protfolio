import React from "react";
import { Col, Row, Typography } from "antd";
import "./about.scss";
const { Title } = Typography;
const About = () => {
  return (
    <div className="about-wrapper-1">
      <Row>
        <Col span={24}>
          <div className="title">
            <Title>About Me</Title>
          </div>
          <hr style={{ width: "50%", borderColor: "red" }}></hr>
          <div style={{ marginTop: "3rem" }}>
            <img
              src="/images/dk.jpeg"
              style={{ width: 320, borderRadius: "50%" }}
            ></img>
            <div style={{ marginTop: "1rem" }}>
              <h2>Durrah Khan</h2>
              <p>NodeJS | ReactJS | Data Scientist</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div
            style={
              {
                // margin: "0 40%",
                // display: "flex",
              }
            }
          >
            <img
              src="/images/LinkedIn_icon_circle.svg.png"
              style={{ width: 40 }}
            ></img>
            <h3 style={{ textAlign: "center" }}>Contact Me on LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/durrah-khan-1a3660171/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                float: "left",
                textDecoration: "none",
                fontSize: "16px",
                width: "100%",
                color: "#1497d0",
                textAlign: "center",
              }}
            >
              LinkedIn
            </a>
          </div>
        </Col>
        <br></br>
        <br></br>
        <Col span={24} style={{ marginTop: "1rem" }}>
          <div style={{}}>
            <img src="/images/upwork.svg" style={{ width: 40 }}></img>
            <h3>Contact Me on Upwork</h3>
            <a
              href="https://www.upwork.com/freelancers/~0174463b96755bf867"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                float: "left",
                textDecoration: "none",
                fontSize: "16px",
                color: "#1497d0",
                width: "100%",
                textAlign: "center",
              }}
            >
              Upwork
            </a>
          </div>
          <br></br>
          <div
            style={{
              fontSize: "18px",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <span style={{ padding: "1rem" }}>
              <a href="/about">Overview</a>
            </span>
            <span style={{ padding: "1rem" }}>
              <a href="/about">Education</a>
            </span>
            <span style={{ padding: "1rem" }}>
              <a href="/about">Experience</a>
            </span>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: "16px",
          marginTop: "4rem",
          width: "75%",
          margin: "auto 10%",
        }}
      >
        <p>
          My passion is making ideas come to life, be it working solo, as part
          of a team or leading a team of fellow developers.
        </p>
        <br></br>
        <br></br>

        <p>
          Throughout my 3 years of development experience, I worked everywhere
          from startups to big companies, building products from the ground up
          or implementing new features.
        </p>
        <br></br>
        <br></br>

        <p>
          My go-to technologies are React.js and Node.js, and I have completed a
          wide range of projects using them. Those are not the only two
          libraries/frameworks I'm familiar with though, and I'm always happy to
          discuss my client's needs and find the best solutions for them.
        </p>
        <br></br>
        <br></br>

        <p>
          I have also done multiple projects of Data science where the main
          focus of the project was data Extraction and Cleansing. Training of
          machine learning models and fine-tuning the models. Python is the
          language that I prefer for a machine learning project.
        </p>
        <br></br>
        <br></br>

        <p>
          I consider myself creative and hardworking, as my stats show. If you
          liked my profile so far, drop me a message and we'll discuss how I can
          be useful to your project.
        </p>
      </Row>
    </div>
  );
};

export default About;
