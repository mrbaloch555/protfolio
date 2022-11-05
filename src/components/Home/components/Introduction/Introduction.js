import { Col, Row, Typography } from "antd";
import { icons } from "antd/lib/image/PreviewGroup";
import React, { Fragment } from "react";
import { SlidersFilled, VideoCameraFilled } from "@ant-design/icons";
import "./intro.scss";
import { skills } from "./skills";
const { Title } = Typography;
const Introduction = () => {
  return (
    <div className="introduction-wrapper" style={{}}>
      <Title className="title">what i do</Title>
      <span>
        <i>Things I'm skilled at and passionate about.</i>
      </span>
      <Row className="skills">
        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                // margin: "auto 25%",
              }}
            >
              <i
                className="fas fa-code fa-stack-1x fa-inverse"
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4rem",
                  color: "white",
                }}
              ></i>
            </div>

            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Web Development
            </h1>
            <p style={{ fontSize: "16px" }}>
              Fast, responsive and engaging apps that bring your ideas to life.
            </p>
          </div>
        </Col>

        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                // margin: "auto 25%",
              }}
            >
              <i
                className="fas fa-cogs fa-stack-1x fa-inverse"
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4rem",
                  color: "white",
                }}
              ></i>
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              API Development
            </h1>
            <p style={{ fontSize: "16px" }}>
              REST APIs that are tailored to your needs and follow the best
              practices in performance and security.
            </p>
          </div>
        </Col>
        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
              <i
                className="fas fa-database fa-stack-1x fa-inverse"
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4rem",
                  color: "white",
                }}
              ></i>
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Database Design
            </h1>
            <p style={{ fontSize: "16px" }}>
              Proper Database design for effective Web & Mobile development,
              always aiming for performance, scale and stability.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="skills">
        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
              <i
                className="fas fa-link fa-stack-1x fa-inverse"
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4rem",
                  color: "white",
                }}
              ></i>
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Third-party API Integration
            </h1>
            <p style={{ fontSize: "16px" }}>
              Integration with any third-party API of your choice. Extend the
              functionality of your apps with the least amount of effort.
            </p>
          </div>
        </Col>

        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
              <i
                className="fas fa-cloud fa-stack-1x fa-inverse"
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4rem",
                  color: "white",
                }}
              ></i>
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Cloud Integration
            </h1>
            <p style={{ fontSize: "16px" }}>
              Deployment and maintenance of your apps in a wide range of Cloud
              Services, from fully managed to highly customizable VPS.
            </p>
          </div>
        </Col>
        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
              <i
                className="fas fa-mobile-alt fa-stack-1x fa-invers"
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4rem",
                  color: "white",
                }}
              ></i>
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Mobile Application API Development
            </h1>
            <p style={{ fontSize: "16px" }}>
              Cross-platform apps servers built with efficiency and speed for
              Android and iOS.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="skills">
        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
              <SlidersFilled
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4.5rem",
                  marginLeft: "-10px",
                  color: "white",
                }}
              />
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Data Science
            </h1>
            <p style={{ fontSize: "16px" }}>
              Worked on multiple Data Science projects. Worked with different
              kinds of data from unstructure to structure data. Cleaned data for
              accuracte Models.
            </p>
          </div>
        </Col>
        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
              <i
                className="fas fa-solid fa-robot"
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4rem",
                  color: "white",
                }}
              ></i>
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Machine Learning
            </h1>
            <p style={{ fontSize: "16px" }}>
              Machine Learning Models for different service. Fast and accurate
              prediction models for different kind of services.
            </p>
          </div>
        </Col>

        <Col sm={24} md={12} lg={8} xl={8} style={{ padding: "2rem" }}>
          <div style={{}} className="skills-box">
            <div
              style={{
                backgroundColor: "rgb(44, 44, 44)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
              <VideoCameraFilled
                style={{
                  position: "relative",
                  fontSize: "50px",
                  margin: "auto",
                  padding: "4.5rem",
                  marginLeft: "-10px",
                  color: "white",
                }}
              />
            </div>
            <br></br>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
                // textTransform: "uppercase",
              }}
            >
              Computer Vision
            </h1>
            <p style={{ fontSize: "16px" }}>
              Build fast object detection models and applications. Fine tunned
              models with less accuracy and speed up their speed with more
              accurate models.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Introduction;
