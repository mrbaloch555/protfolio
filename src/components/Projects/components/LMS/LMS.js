import React from "react";
import "./lms.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const LMS = () => {
  return (
    <div className="million-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">Lerning Management System - LMS</Title>
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
                JavaScript
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
                PHP
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
                MySQL
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="description-wrapper">
        <div className="des-contents">
          <Title className="title">Lerning Management System</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              LMS is an online site which a user can use to manage academic
              business. It helps and manage all organizational hierarchy of any
              school.
            </p>
            <p>
              <b>All-In-One LMS:</b> Manage your staff, teachers, students,
              admissions, HRM, classrooms, schedules, library, transport,
              dormitory and much more. The Sib360 LMS is a complete end-to-end
              solution for your schooling system. Online Classes, Exams and
              Learning: Experience the latest learning environment with online
              virtual classrooms, video-call assignments, learning material and
              much more. Students and parents can see their progress, fee,
              schedule and events.
            </p>
            {/* <br></br> */}
            <b>Technology Stack:</b>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>MtSQL</li>
            </ul>
            <b>Description</b>
            <p>
              User needs to sign up like any other ordinary site. After their
              sign-up has been confirmed, they can log in or out anytime. The
              credentials are saved in the database for future. After logging
              in, you are sent to the dashboard. User can toggle dashboard to
              use various features.
            </p>
            <b>Cloud/Offline Mode:</b>
            <p>Experience a POS system that can work without any internet.</p>
            <b>Advanced Reporting:</b>
            <p>
              Grow your business with our advanced reporting feature. The POS
              reporting feature gives you a high level view of your business, as
              well as allowing you to get into the tiniest of the details.
            </p>
            <b>Video Conferencing:</b>
            <p>
              It allows you to connect with all your employees and students from
              all around the world.
            </p>
            <b>Virtual Classroom:</b>
            <p>
              Arrange virtual classrooms for your students and efficiently
              deliver the course agenda on time. Certificates, Promotions and
              Exams: Use our LMS system exclusively to present certificates to
              students, notify about promotions and conducting exams.
            </p>
            <b>Key Features:</b>
            <ul>
              <li>Institution Management</li>
              <li>User Management</li>
              <li>Students, Teachers, Admins</li>
              <li>Students, Teachers, Admins</li>
              <li>Accountant, Librarian, Driver and more</li>
              <li>Profile and Login Management</li>
              <li>Roles and Access Control</li>
              <li>Notification Management</li>
              <li>Automated Email System</li>
              <li>Auto SMS Alerts</li>
              <li>Event Management</li>
              <li>Access Control Management</li>
              <li>Roles Management</li>
              <li>Roles with Different Permissions</li>
              <li>Unlimited Staffs, Students & Roles</li>
            </ul>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              List of Modules
            </p>
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/lms/ezgif.com-gif-maker (1).jpg"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/lms/ezgif.com-gif-maker (2).jpg"></img>
              </Col>
            </Row>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/lms/ezgif.com-gif-maker (3).jpg"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/lms/ezgif.com-gif-maker.jpg"></img>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMS;
