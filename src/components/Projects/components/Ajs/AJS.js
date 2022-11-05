import React from "react";
import "./ajs.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const AJS = () => {
  return (
    <div className="ajs-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">AJS Sports APP</Title>
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
                Node.JS
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
                MongoDB
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
          <Title className="title">AJS Sports APP</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              Ajs Sports is a Web live streaming application, that aims for
              users live stream different kinds of games. Games includes
              Football, Basketball, NFL and more. User don't need to get
              register to live stream matches. Users can view different kinds of
              data regarding Games. They can have full list of games of Football
              leauges. Leauges matches of NFL, Leauge matches of Basketball.
              Rather then that they can also view Teams standings,
              substitutions, lineups and more. I did use Twitter API to fetch
              tweets of ajs twitter account for notification service.
            </p>
            {/* <br></br> */}
            <p>
              I was the Lead Backend Developer, I planned and integrate the
              entire structure and functionality with my team. I completed the
              backend code of application other fellow developer. I was leading
              the frontend team as well, all the functionality were disscussed
              and implemented.
            </p>
            <p>
              The stack consists of a NodeJS API, a MongoDB database and admin
              in ReactJS.
            </p>

            <p>
              Some of the relevant third party api integrations are: Ripid API
              for different games informations. Twitter API for notification
              services.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              List of Modules
            </p>
            <span>Some important modules list, its not complete list!</span>
            <br></br>
            <br></br>
            <ul>
              <li>Auth Module (Admin)</li>
              <ul>
                <li>Create Admin (Super Admin)</li>
                <li>Login Admin</li>
                <li>Logout Admin</li>
                <li>Forgot Password</li>
                <li>Verify OTP</li>
                <li>Reset Password</li>
                <li>Change Password</li>
              </ul>
            </ul>
            <ul>
              <li>Football Module</li>
              <ul>
                <li>Fetch Football Leauges</li>
                <li>Filter out required leauges</li>
                <li>Fetch Fixtures By Leauges ID</li>
                <li>Fetch Fixtures By Leauge Name</li>
                <li>Fetch Fixtures By Fixture ID</li>
                <li>Fetch all Fixture in range of 20 days</li>
                <li>Format Fixture Data</li>
                <li>More ...</li>
              </ul>
            </ul>

            <ul>
              <li>Basketball Module</li>
              <ul>
                <li>Fetch Basketball Leauges</li>
                <li>Filter out required leauges</li>
                <li>Fetch Fixtures By Leauges ID</li>
                <li>Fetch Fixtures By Leauge Name</li>
                <li>Fetch Fixtures By Fixture ID</li>
                <li>Fetch all Fixture in range of 20 days</li>
                <li>Format Fixture Data</li>
                <li>More ...</li>
              </ul>
            </ul>
            <ul>
              <li>News Module</li>
              <ul>
                <li>Create News</li>
                <li>Get all News</li>
                <li>Get Single News By ID</li>
                <li>Update News</li>
                <li>Delete News</li>
              </ul>
            </ul>
            <ul>
              <li>Twitter Module</li>
              <ul>
                <li>Fetch Tweets</li>
                <li>Fetch Retweets</li>
                <li>
                  Run a cron job that automatically fetch new tweets after every
                  1 hour
                </li>
                <li>Save Tweets to database</li>
                <li>Create Notification from new tweets</li>
                <li>Disbale tweets which were tweeted after 24 hours.</li>
              </ul>
            </ul>
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/ajs/Desktop - 1.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/ajs/Desktop - 2.png"></img>
              </Col>
            </Row>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/ajs/Desktop - 3.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/ajs/Desktop - 10.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/ajs/Standings.png"></img>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AJS;
