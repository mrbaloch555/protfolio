import React from "react";
import "./society.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const Society = () => {
  return (
    <div className="society-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">Social Society</Title>
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
          <Title className="title">Social Society</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              Social Social is a social event tickets buying Mobile application,
              that aims for users to buy tickets of different kinds of events
              happening near their location. Users can publish posts and have
              comments and like, with each comment have replies.
            </p>
            {/* <br></br> */}
            <p>
              I was the Lead Backend Developer, I planned and integrate the
              entire structure and functionality with myself. I completed the
              backend code of application solo. I was leading the mobile team as
              well, all the functionality were disscussed and implemented.
            </p>
            <p>
              The stack consists of a NodeJS API, a MongoDB database and admin
              in ReactJS and Mobile application on Flutter
            </p>

            <p>
              Some of the relevant third party api integrations are: Stripe and
              Paypal as the Payment system, SendGrid as the e-mail service,
              Twilio as the SMS service, among others.
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
              <li>Post Module</li>
              <ul>
                <li>Create New Post</li>
                <li>View Posts</li>
                <li>Like Post</li>
                <li>Dislike Post</li>
                <li>Comment Post</li>
                <li>Delete Comment</li>
                <li>Edit Comment</li>
                <li>Reply Comment</li>
                <li>Like Reply</li>
                <li>Dislike Reply</li>
                <li>More ...</li>
              </ul>
            </ul>

            <ul>
              <li>Event Module</li>
              <ul>
                <li>Create New Event (Admin)</li>
                <li>View Events</li>
                <li>Search Events By Location Name</li>
                <li>Search Events By User Current Location</li>
                <li>Buy Tickets for Event</li>
                <li>View Ticket</li>
                <li>More ...</li>
              </ul>
            </ul>
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={12} lg={8} xl={8} className="col">
                <img src="/images/sone/Splash.png"></img>
              </Col>
              <Col sm={24} md={12} lg={8} xl={8}>
                <img src="/images/sone/Register.png" className="col"></img>
              </Col>
              <Col sm={24} md={12} lg={8} xl={8}>
                <img src="/images/sone/Login.png" className="col"></img>
              </Col>
              {/* <Col sm={24} md={12} lg={8} xl={6}>
                <img src="/images/sone/Profile.png" className="col"></img>
              </Col> */}
            </Row>
            <br></br>
            <br></br>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={12} lg={8} xl={8} className="col">
                <img src="images/sone/Create Post.png"></img>
              </Col>
              <Col sm={24} md={12} lg={8} xl={8}>
                <img src="/images/sone/Comments.png" className="col"></img>
              </Col>
              <Col sm={24} md={12} lg={8} xl={8}>
                <img src="/images/sone/Ticketing (1).png" className="col"></img>
              </Col>
              {/* <Col sm={24} md={12} lg={8} xl={6}>
                <img src="/images/sone/Profile.png" className="col"></img>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Society;
