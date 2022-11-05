import React from "react";
import "./investment.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const Investment = () => {
  return (
    <div className="investment-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">Investment Mind - Crypto Coins</Title>
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
          <Title className="title">Investment Mind - Crypto Coins</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              Investment Mind is a web based and mobile application for crypto
              coins price checking application with lots of features. User can
              easily keep track of different coins prices with minimal efforts.
              Feature like News, different kinds of analysis of crypto coins
              which were added on admin dashboard side.
            </p>
            {/* <br></br> */}
            <p>
              I serve as the backend lead role for this application and created
              the fully functional backend API'S by myself. It wasn't a big
              project!
            </p>
            <p>
              The stack consists of a NodeJS API, a MongoDB database and admin
              dashbaord in ReactJS and User Dashboard panel in ReactJS. The
              mobile UI was done in Flutter.
            </p>

            <p>
              Some of the relevant third party api integrations are: Crypto
              Coins Market for prices of crypto coins. Firebase for push
              notifications. sendGrid API for e-mail services.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              List of Modules
            </p>
            <span>Some important modules list, its not complete list!</span>
            <br></br>
            <br></br>
            <ul>
              <li>Auth Module (User)</li>
              <ul>
                <li>Sign Up With Google</li>
                <li>Sign Up With Facebook</li>
                <li>Register User</li>
                <li>Login User</li>
                <li>Logout User</li>
                <li>Forgot Password</li>
                <li>Verify OTP</li>
                <li>Reset Password</li>
                <li>Change Password</li>
              </ul>
            </ul>
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
              <li>Crypto Module</li>
              <ul>
                <li>Fetch prices of crypto coins</li>
                <li>Fetch historical prices of crypto coins</li>
                <li>Fetch sinle crypto price</li>
                <li>Fetch single historical prices</li>
                <li>Fetch Coins information</li>
                <li>Fetch Coins Logos</li>
              </ul>
            </ul>
            <ul>
              <li>Analysis Module</li>
              <ul>
                <li>Create Analysis</li>
                <li>Get All Analysis</li>
                <li>Get Single Analysis</li>
                <li>Update Analysis</li>
                <li>Delete Analysis</li>
              </ul>
            </ul>
            <ul>
              <li>Feature Videos Module</li>
              <ul>
                <li>Create Feature</li>
                <li>Get All Feature</li>
                <li>Get Single Feature</li>
                <li>Update Feature</li>
                <li>Delete Feature</li>
              </ul>
            </ul>
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/investment/Sign up.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/investment/Log in.png"></img>
              </Col>
            </Row>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/investment/Homepage.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/investment/CRYPTO.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/investment/Crypto extended.png"></img>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
