import React from "react";
import "./edeelbux.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const EdeelBux = () => {
  return (
    <div className="edeel-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">Adeel Bux</Title>
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
          <Title className="title">Adeel Bux</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              Adeel Bux is a web based application. It consists of an admin
              dashbaord and user dashboard. The purpose of the application is
              where admin add or deduct money from user's account. It is more or
              less like a small banking system but lots of limitations! like
              admin only can add or deduct money. For each addition and
              deduction transactions are created.
            </p>
            {/* <br></br> */}
            <p>
              I was the Lead Backend Developer, I planned and integrate the
              entire structure and functionality with myself. I was leading the
              frontend team as well, all the functionality were disscussed and
              implemented.
            </p>
            <p>
              The stack consists of a NodeJS API, a MongoDB database and admin
              dashbaord in ReactJS.
            </p>

            <p>
              Some of the relevant third party api integrations are: sendGrid
              API for e-mail services.
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
              <li>Auth Module (User)</li>
              <ul>
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
              <li>Account Module</li>
              <ul>
                <li>Create User Account</li>
                <li>Debit User Account</li>
                <li>Credit User Account</li>
              </ul>
            </ul>
            <ul>
              <li>Transaction Module (Admin)</li>
              <ul>
                <li>Create Transaction</li>
                <li>Get All Transaction</li>
                <li>Get Single Transaction</li>
              </ul>
            </ul>
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/adeelbux/Sign IN UP.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/adeelbux/Dashboard.png"></img>
              </Col>
            </Row>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/adeelbux/Admin Panel.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/adeelbux/New Member.png"></img>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdeelBux;
