import React from "react";
import { Col, Row, Typography, Card } from "antd";
import "./skills.scss";
const { Title } = Typography;
const { Meta } = Card;
const Skills = () => {
  return (
    <div className="skills-wrapper">
      <Row>
        <Col span={24}>
          <div className="title">
            <Title>Skills Set</Title>
          </div>
        </Col>
      </Row>
      <Row className="js-box">
        <h2
          style={{
            padding: "0.5rem",
            fontSize: "20px",
            width: "100%",
            textAlign: "left",
            color: "black",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Web Development (JavaScript & Python)
        </h2>
        <hr style={{ width: "100%", marginTop: "-5px" }}></hr>
        <Col sm={24} md={12} lg={12} xl={8}>
          <Card
            hoverable
            bordered={false}
            round={false}
            title="Backend (JavaScript)"
            style={{
              width: 320,
            }}
            cover={
              <img
                style={{ padding: "1rem" }}
                alt="NodeJs"
                src="/images/node.png"
              />
            }
          >
            <div className="skill-content">
              <h2 style={{ fontWieght: "bold", fontSize: "26px" }}>Node JS</h2>
              <div style={{ textAlign: "left" }}>
                <h2>Libraries</h2>
                <div
                  style={{
                    fontSize: "16px",
                  }}
                >
                  <ul>
                    <li>Express JS</li>
                    <li>Mongoose</li>
                    <li>JOI</li>
                    <li>Multer</li>
                    <li>Async</li>
                    <li>Loadash</li>
                    <li>Axios</li>
                    <li>JWT</li>
                    <li>Passport JWT</li>
                    <li>Socket IO</li>
                    <li>More ..</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={12} lg={12} xl={8}>
          <Card
            hoverable
            bordered={false}
            round={false}
            title="Frontend (JavaScript)"
            style={{
              width: 320,
            }}
            cover={
              <img
                alt="ReactJs"
                src="/images/react.png"
                style={{ padding: "1rem" }}
              />
            }
          >
            <div className="skill-content">
              <h2 style={{ fontWieght: "bold", fontSize: "26px" }}>React JS</h2>
              <div style={{ textAlign: "left" }}>
                <h2>Libraries</h2>
                <div
                  style={{
                    fontSize: "16px",
                  }}
                >
                  <ul>
                    <li>React JS</li>
                    <li>React Router</li>
                    <li>React DOM</li>
                    <li>Redux</li>
                    <li>Redux Saga</li>
                    <li>Redux Thunk</li>
                    <li>React Resizable</li>
                    <li>Canvs Js</li>
                    <li>Antd Design</li>
                    <li>React Bootstrap</li>
                    <li>More ..</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col sm={24} md={12} lg={12} xl={8}>
          <Card
            hoverable
            bordered={false}
            title="Backend (Python)"
            round={false}
            style={{
              width: 320,
            }}
            cover={
              <img
                alt="Flask"
                src="/images/flask.png"
                style={{ padding: "1rem" }}
              />
            }
          >
            <div className="skill-content">
              <h2 style={{ fontWieght: "bold", fontSize: "26px" }}>Flask</h2>
              <div style={{ textAlign: "left" }}>
                <h2>Libraries</h2>
                <div
                  style={{
                    fontSize: "16px",
                  }}
                >
                  <ul>
                    <li>Flask</li>
                    <li>Flask Restful</li>
                    <li>React DOM</li>
                    <li>Flask Cors</li>
                    <li>Venv</li>
                    <li>Pymongo</li>
                    <li>Bcrypt</li>
                    <li>Requests</li>
                    <li>Url Lib</li>
                    <li>Bio Python</li>
                    <li>More ..</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>

      <div style={{}}>
        <div style={{ wdith: "100%" }}>
          <div
            style={{
              position: "relative",
              top: "30%",
            }}
          ></div>
        </div>
        <div className="contents">
          <Row style={{ wdith: "100%" }} className="ds-box">
            <h2
              style={{
                padding: "0.5rem",
                fontSize: "20px",
                width: "100%",
                textAlign: "left",
                color: "black",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Data Science (Python)
            </h2>
            <hr style={{ width: "100%", marginTop: "-5px" }}></hr>
            <Col xl={8} md={12} sm={24} lg={12}>
              <Card
                hoverable
                bordered={false}
                round={false}
                className="col"
                style={{
                  width: 320,
                }}
              >
                <div className="skill-content">
                  <h2
                    style={{
                      fontWieght: "bold",
                      fontSize: "26px",
                      textAlign: "left",
                      borderBottom: "1px solid white",
                      marginTop: "-1rem",
                    }}
                  >
                    Data Science
                  </h2>

                  <div style={{ textAlign: "left" }}>
                    <h2>Libraries</h2>
                    <div
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <ul>
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>Scipy</li>
                        <li>Redux</li>
                        <li>Matplolib</li>
                        <li>Seaborn</li>
                        <li>React Resizable</li>
                        <li>Beautiful Soup</li>
                        <li>Scrapy</li>
                        <li>Selenium</li>
                        <li>Requests</li>
                        <li>More ..</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xl={8} md={12} sm={24} lg={12}>
              <Card
                hoverable
                bordered={false}
                round={false}
                className="col"
                style={{
                  width: 320,
                }}
              >
                <div className="skill-content">
                  <h2
                    style={{
                      fontWieght: "bold",
                      fontSize: "26px",
                      textAlign: "left",
                      borderBottom: "1px solid white",
                      marginTop: "-1rem",
                    }}
                  >
                    Machine Learning
                  </h2>
                  <div style={{ textAlign: "left" }}>
                    <h2>Libraries</h2>
                    <div
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <ul>
                        <li>Sckit Learn</li>
                        <li>Tensorflow</li>
                        <li>Pytorch</li>
                        <li>Keras</li>
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                        <li>NLTK</li>
                        <li>More ..</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xl={8} md={12} sm={24} lg={12}>
              <Card
                hoverable
                bordered={false}
                round={false}
                className="col"
                style={{
                  width: 320,
                }}
              >
                <div className="skill-content">
                  <h2
                    style={{
                      fontWieght: "bold",
                      fontSize: "26px",
                      textAlign: "left",
                      borderBottom: "1px solid white",
                      marginTop: "-1rem",
                    }}
                  >
                    Deep Learning
                  </h2>
                  <div style={{ textAlign: "left" }}>
                    <h2>Libraries</h2>
                    <div
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <ul>
                        <li>YOLO</li>
                        <li>LeNet5</li>
                        <li>AlexNet</li>
                        <li>VGG</li>
                        <li>Overfeat</li>
                        <li>GoogleNet</li>
                        <li>ResNet</li>
                        <li>React Resizable</li>
                        <li>SequenceNet</li>
                        <li>DLIB</li>
                        <li>More ..</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            <br></br>
            <Col xl={8} md={12} sm={24} lg={12}>
              <Card
                hoverable
                bordered={false}
                className="col"
                round={false}
                style={{
                  width: 320,
                }}
              >
                <div className="skill-content">
                  <h2
                    style={{
                      fontWieght: "bold",
                      fontSize: "26px",
                      textAlign: "left",
                      borderBottom: "1px solid white",
                      marginTop: "-1rem",
                    }}
                  >
                    Computer Vision
                  </h2>
                  <div style={{ textAlign: "left" }}>
                    <h2>Libraries</h2>
                    <div
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <ul>
                        <li>OpenCV</li>
                        <li>PIL</li>
                        <li>React DOM</li>
                        <li>Scikit Learn</li>
                        <li>PIL Image</li>
                        <li>Matplotlib</li>
                        <br></br>
                        <ul>
                          <h2 style={{ position: "relative", left: "-75px" }}>
                            Neural Netwroks
                          </h2>
                        </ul>
                        <li>YOLO</li>
                        <li>DLIB</li>
                        <li>Pytessract</li>
                        <li>Imutils</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xl={8} md={12} sm={24} lg={12}>
              <Card
                hoverable
                bordered={false}
                round={false}
                className="col"
                style={{
                  width: 320,
                }}
              >
                <div className="skill-content">
                  <h2
                    style={{
                      fontWieght: "bold",
                      fontSize: "26px",
                      textAlign: "left",
                      borderBottom: "1px solid white",
                      marginTop: "-1rem",
                    }}
                  >
                    Applications
                  </h2>
                  <div
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <h2>Projects</h2>
                    <div
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <ul>
                        <li>Object Detection</li>
                        <li>Object Recognition</li>
                        <li>Facial Recognition</li>
                        <li>Sentiment Analysis</li>
                        <li>Chatbots</li>
                        <li>Product Recommendation</li>
                        <li>Movies Recommendation</li>
                        <li>Automatic Attendance System</li>
                        <li>Weather Prediction System</li>
                        <li>More ..</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Skills;
