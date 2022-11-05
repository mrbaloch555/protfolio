import React, { useState } from "react";
import { Col, Radio, Row, Typography } from "antd";
import "./about.scss";
const { Title } = Typography;
const About = () => {
  const [displayBox, setDisplayBox] = useState({
    overview: "block",
    education: "none",
    experience: "none",
  });

  return (
    <div className="about-wrapper-about">
      <div className="content">
        <div className="content-box">
          <div className="about-box">
            <h1 className="about-text">About Me</h1>
            <hr></hr>
          </div>

          <div className="switcher-wrapper">
            <Row>
              <Col span={2}>
                <div className="switcher-points">
                  <div
                    className={`
                    bolet b-overview ${
                      displayBox.overview == "block" ? "pointer" : ""
                    }`}
                    onClick={() => {
                      setDisplayBox({
                        overview: "block",
                        education: "none",
                        experience: "none",
                      });
                    }}
                  ></div>
                  <div
                    className={`bolet b-eductaion ${
                      displayBox.education == "block" ? "pointer" : ""
                    }`}
                    onClick={() => {
                      setDisplayBox({
                        overview: "none",
                        education: "block",
                        experience: "none",
                      });
                    }}
                  ></div>
                  <div
                    className={`bolet b-experience ${
                      displayBox.experience == "block" ? "pointer" : ""
                    }`}
                    onClick={() => {
                      setDisplayBox({
                        overview: "none",
                        education: "none",
                        experience: "block",
                      });
                    }}
                  ></div>
                </div>
              </Col>
              <Col
                span={22}
                className="overview-col"
                style={{
                  display: displayBox.overview,
                }}
              >
                <div className="overview">
                  <h1>Overview</h1>
                </div>
                <div className="overviw-content">
                  <p>
                    My passion is making ideas come to life, be it working solo,
                    as part of a team or leading a team of fellow developers.
                    Throughout my 3 years of development experience, I worked
                    everywhere from startups to big companies, building products
                    from the ground up or implementing new features. My go-to
                    technologies are React.js and Node.js, and I have completed
                    a wide range of projects using them. Those are not the only
                    two libraries/frameworks I'm familiar with though, and I'm
                    always happy to discuss my client's needs and find the best
                    solutions for them. I have also done multiple projects of
                    Data science where the main focus of the project was data
                    Extraction and Cleansing. Training of machine learning
                    models and fine-tuning the models. Python is the language
                    that I prefer for a machine learning project. I consider
                    myself creative and hardworking, as my stats show. If you
                    liked my profile so far, drop me a message and we'll discuss
                    how I can be useful to your project.
                  </p>
                </div>
              </Col>
              <Col
                span={17}
                className="education-col"
                style={{
                  display: displayBox.education,
                }}
              >
                <div className="education">
                  <h2>Education</h2>
                </div>
                <div className="education-content">
                  <div id="circled-line">
                    <div className="ms-ds">
                      <p>
                        <div className="line"></div>NOVEMBER 2021 PRESENT
                      </p>
                      <p>
                        <div className="line"></div>MS DATA SCIENCE
                      </p>
                      <p>
                        <div className="line"></div>UNIVERSITY OF THE PUNAB
                        LAHOR
                      </p>
                      <p>
                        <div className="line"></div>COURSES
                      </p>
                      <ul>
                        <li>Data Science Tools and Techniques</li>
                        <li>Statistics and Mathematics for Data Science</li>
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>Digital Image Processing, Computer Vision</li>
                        <li>Natural Language Processing</li>
                        <li>Bio Informatics</li>
                      </ul>
                    </div>
                    <div className="ms-ds">
                      <p>
                        <div className="line"></div>APRIL 2017 – APRIL 2021
                      </p>
                      <p>
                        <div className="line"></div>BS INFORMATION TECHNOLOGY
                      </p>
                      <p>
                        <div className="line"></div>
                        INSTITUTE OF SOUTHERN PUNJAB MULTAN
                      </p>
                      <p>
                        <div className="line"></div>COURSES
                      </p>
                      <ul>
                        <li>Programming Fundamentals</li>
                        <li>Object Oriented Programming</li>
                        <li>Data Structure</li>
                        <li>Database Management System I</li>
                        <li>Database Management System II</li>
                        <li>Software Engineering</li>
                        <li>Web Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>

              <Col
                span={17}
                className="experience-col"
                style={{
                  display: displayBox.experience,
                }}
              >
                <div className="experience">
                  <h2>Experience</h2>
                </div>
                <div className="experience-content">
                  <div id="circled-line">
                    <div className="ms-ds">
                      <p>
                        <div className="line"></div>07/2022 - PRESENT
                      </p>
                      <p>
                        <div className="line"></div>ELITE IT LIMITED
                      </p>
                      <p>
                        <div className="line"></div>Back end Engineer
                      </p>
                      <p>
                        <div className="line"></div>TASKS
                      </p>
                      <ul>
                        <li>
                          Gathered and validated requirements as a part of a
                          collaboration for a progressive web application that
                          helped develop clear, unambiguous technical
                          requirements and establish a consistent feedback loop.
                        </li>
                        <li>
                          Coordinated with 3 other teams to identify customer
                          requirements, creating 16+ BRD and tech documents that
                          streamlined development activities.
                        </li>
                        <li>
                          Performed full-stack development of the high-profile
                          external web app,
                        </li>
                        <li>
                          Maintained newly developed and existing systems for a
                          mission-critical
                        </li>
                        <li>
                          Deployed applications on digital ocean and Amazon EC2
                          servers.
                        </li>
                        <li>Set up HTTPS configurations.</li>
                        <li>
                          Optimized legacy data storage and search queries for
                          the high-volume.
                        </li>
                      </ul>
                    </div>
                    <div className="ms-ds">
                      <p>
                        <div className="line"></div>05/2022 - 09/2022
                      </p>
                      <p>
                        <div className="line"></div>FREELANCER
                      </p>
                      <p>
                        <div className="line"></div>
                        Data Scientist
                      </p>
                      <p>
                        <div className="line"></div>TASKS
                      </p>
                      <ul>
                        <li>
                          Deployed a recommendation engine to production to
                          conditionally recommend other menu items based on past
                          order history, increasing average order size by 7%
                        </li>
                        <li>
                          Designed a Virtual Assistant chatbot for a company
                          with application-specific queries and answers
                        </li>
                        <li>
                          Developed a movie recommendation system for a client
                          for their web-based application and deployed them on
                          Amazon EC2.
                        </li>
                        <li>
                          Work on various data science projects and cleaned
                          different kinds of data using python libraries.
                        </li>
                        <li>
                          Worked on selenium web driver and scrap data from
                          different websites with help for beautiful soup.
                        </li>
                      </ul>
                    </div>

                    <div className="ms-ds">
                      <p>
                        <div className="line"></div>06/2021- 05/2022
                      </p>
                      <p>
                        <div className="line"></div>STACK INTEL IO
                      </p>
                      <p>
                        <div className="line"></div>
                        Full Stack MERN Web Developer
                      </p>
                      <p>
                        <div className="line"></div>TASKS
                      </p>
                      <ul>
                        <li>
                          Backend Web development using (Nodejs, Express, and
                          MongoDB).
                        </li>
                        <li>
                          Frontend Development with Reactjs and Redux Saga.
                        </li>
                        <li>
                          Database replication implementation with
                          authentication is supported for the smooth running of
                          servers. Replication of files from one server to
                          another server for availability of files.
                        </li>
                        <li>
                          Writing efficient and fast Mongo Database queries
                          (Filtering, Aggregation, Bulk Write operations, Index
                          Searching) to reduce the load on the server.
                        </li>
                        <li>
                          Design Rest APIs with JWT authentication supported and
                          integration of APIs for web and mobile apps.
                        </li>
                        <li>
                          Developing Role based authentication system for
                          different users with different sets of operations.
                        </li>
                        <li>
                          Integration of Firebase notification system in Node
                          for mobile apps.
                        </li>
                        <li>
                          Developed an interactive User Interface using HTML,
                          CSS, React JS, and Ant Design.
                        </li>
                        <li>
                          Implemented Redux Saga as middleware for Node.js APIs
                          call efficient workflow, and Cron expression for
                          pooling.
                        </li>
                      </ul>
                    </div>

                    <div className="ms-ds">
                      <p>
                        <div className="line"></div>01/2019 – 03/2020
                      </p>
                      <p>
                        <div className="line"></div>NET RIDERS
                      </p>
                      <p>
                        <div className="line"></div>
                        Full Stack MERN Web Developer
                      </p>
                      <p>
                        <div className="line"></div>TASKS
                      </p>
                      <ul>
                        <li>
                          Designed and developed User Interface using HTML5,
                          CSS, and JavaScript Created sites using various
                          Content Management Systems, and theming semantically
                          with HTML, CSS and adding interactivity with
                          JavaScript and libraries like jQuery.
                        </li>
                        <li>
                          Implemented best practices in JavaScript codebase,
                          develop new functionality and create new layouts,
                          teach advanced JavaScript techniques to the team.
                        </li>
                        <li>
                          Implemented best practices in JavaScript codebase,
                          develop new functionality and create new layouts,
                          teach advanced JavaScript techniques to the team.
                        </li>
                        <li>
                          Detect the attack and its source by analyzing network
                          traffic data.
                        </li>
                        <li>
                          Analyzed the weblog data and extract the analytics
                          from the data, we have set up a Hadoop cluster with 10
                          hosts (9 DataNodes + 1 Master Node) using Cloudera
                          Manager to process 7TB of log data.
                        </li>
                        <li>
                          Analyzed the weblog data and extract the analytics
                          from the data, we have set up a Hadoop cluster with 10
                          hosts (9 DataNodes + 1 Master Node) using Cloudera
                          Manager to process 7TB of log data.
                        </li>
                        <li>
                          Traveled Package Recommendation System Environment:
                          Web-based Data Mining Project, Java, JavaScript, MySQL
                          Implemented a travel package recommendation service in
                          Java using the Collaborative Filtering technique.
                        </li>
                      </ul>
                    </div>

                    <div className="ms-ds">
                      <p>
                        <div className="line"></div>05/2020 – 12/2020
                      </p>
                      <p>
                        <div className="line"></div>TECH LAB
                      </p>
                      <p>
                        <div className="line"></div>
                        Java Script Developer
                      </p>
                      <p>
                        <div className="line"></div>TASKS
                      </p>
                      <ul>
                        <li>
                          Designed Front end application using front end
                          frameworks (Ant Design, Bootstrap)
                        </li>
                        <li>
                          Designed Backend application using PHP and MySQL.
                        </li>
                        <li>Written efficient SQL queries.</li>
                        <li>
                          Make sure continuous communication of backend and
                          front end.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#1f1f1f",
            position: "relative",
            // borderTop: "3px solid red",
          }}
        >
          <div style={{ fontSize: "18px" }} className="btns">
            <span
              style={{ padding: ".6rem" }}
              className={`${displayBox.overview == "block" ? "active" : ""}`}
              onClick={() => {
                setDisplayBox({
                  overview: "block",
                  education: "none",
                  experience: "none",
                });
              }}
            >
              Overview
            </span>
            <span
              style={{ padding: ".6rem" }}
              className={`${displayBox.education == "block" ? "active" : ""}`}
              onClick={() => {
                setDisplayBox({
                  overview: "none",
                  education: "block",
                  experience: "none",
                });
              }}
            >
              Education
            </span>
            <span
              style={{ padding: ".6rem" }}
              className={`${displayBox.experience == "block" ? "active" : ""}`}
              onClick={() => {
                setDisplayBox({
                  overview: "none",
                  education: "none",
                  experience: "block",
                });
              }}
            >
              Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
