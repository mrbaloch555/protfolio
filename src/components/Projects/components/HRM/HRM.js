import React from "react";
import "./hrm.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const HRM = () => {
  return (
    <div className="hrm-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">
            Human Resource Management System - HRMS
          </Title>
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
          <Title className="title">Human Resource Management System</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              HR is an online site which a user can use to keep all sorts of
              logistics related to organization in check. It is useful to keep
              track of employees, their roles and positions, expenses and bills,
              events, schedules and meetings and much more.
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
              <b>ICT Training Methodology:</b>
              User needs to make an account to login. The information would be
              stored in a database for future usage. User gets taken directly to
              the panel. The panel has the variety of options to explore,
              including:
            </p>
            <b>Dashboard:</b>
            <ul>
              <li>Dashboard helps in navigating</li>
              <li>Employees, Roles, Leave nd HR Sale</li>
              <li>
                Employees Presence and Absence Projects and Tasks Completed or
                Pending
              </li>
              <li>Employees Departments and Designations</li>
              <li>
                Total Expenses, Total Salaries Paid, Account Balances and Travel
                Expenses
              </li>
              <li>
                Calendar with Labeling Options related to Holidays, Leaves, and
                Meetings etc,
              </li>
            </ul>
            <b>Employees:</b>
            <ul>
              <li>With its employee category, you can easily</li>
              <li>
                Check on Employees, their Statuses and Add or Remove New and Old
                Employees
              </li>
              <li>Define their Roles and Privileges</li>
              <li>Define Custom Fields if Necessary</li>
              <li>Manage Staff Directory</li>
              <li>Import Employees from Outside</li>
              <li>Keep Track of Exiting Employees</li>
              <li>
                Navigate Expired Documents, be it Immigration, Official or
                Related to Warranty
              </li>
              <li>Check Last Employee Login for Security Reasons.</li>
            </ul>
            <b>Key Features:</b>
            <ul>
              <li>Payroll Management</li>
              <li>Training Management</li>
              <li>Performance Management</li>
              <li>Timesheet Management</li>
              <li>HR Calendar Management</li>
              <li>Tickets Management</li>
              <li>Recruitment Management</li>
              <li>Files Manager Management</li>
              <li>Project Management</li>
              <li>Finance Management</li>
              <li>Assets Management</li>
              <li>Events and Meetings Management</li>
              <li>HR Reports Management</li>
            </ul>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              List of Modules
            </p>
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/hrm/ezgif.com-gif-maker (1).png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/hrm/ezgif.com-gif-maker (2).png"></img>
              </Col>
            </Row>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/hrm/ezgif.com-gif-maker (3).png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/hrm/ezgif.com-gif-maker.png"></img>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRM;
