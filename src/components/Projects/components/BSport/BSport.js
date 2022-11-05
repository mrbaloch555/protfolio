import React from "react";
import "./bsport.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const BSport = () => {
  return (
    <div className="bsport-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">BSport PSL 2020</Title>
          <div className="stacks">
            <span>
              <i
                class="fas fa-solid fa-tag"
                style={{
                  fontSize: "18px",
                  color: "red",
                  marginRight: "10px",
                }}
              ></i>
              <span
                style={{
                  fontSize: "18px",
                  color: "white",
                  marginRight: "20px",
                }}
              >
                Flask
              </span>
            </span>
            <span>
              <i
                class="fas fa-solid fa-tag"
                style={{
                  fontSize: "18px",
                  color: "red",
                  marginRight: "10px",
                }}
              ></i>
              <span
                style={{
                  fontSize: "18px",
                  color: "white",
                  marginRight: "20px",
                }}
              >
                Firebase
              </span>
            </span>
            <span>
              <i
                class="fas fa-solid fa-tag"
                style={{
                  fontSize: "18px",
                  color: "red",
                  marginRight: "10px",
                }}
              ></i>
              <span
                style={{
                  fontSize: "18px",
                  color: "white",
                }}
              >
                ReactJS
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="description-wrapper">
        <div className="des-contents">
          <Title className="title">B-Sport PSL 2020</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              B Sports is your complete resource of Live Sports in the region.
              <ul>
                <li>With LIVE Streaming of Matches</li>
                <li>On-Demand Content</li>
                <li>News & Detailed Scores PSL</li>
                <li>Live Stream</li>
                <li>Live Scoreboard Graphical Statistics</li>
                <li>News Fixtures</li>
                <li>Points Tables</li>
                <li>Quiz</li>
              </ul>
            </p>
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/bsport/Gallery-1_1300px-700px-1024x551.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/bsport/Gallery-3_1300px-700px-1024x551.png"></img>
              </Col>
            </Row>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/bsport/N-Component_3_900px-482px.png"></img>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSport;
