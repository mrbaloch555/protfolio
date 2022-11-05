import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./protfolio.scss";
const { Title } = Typography;
const { Meta } = Card;
const Projects = () => {
  const naviagte = useNavigate();
  return (
    <div className="protfolio-wrapper">
      <div className="title">
        <Title>Projects</Title>
        <p style={{ fontSize: "16px" }}>
          <i>Some of my latest work</i>
        </p>
      </div>
      <div
        className="projects"
        style={{
          padding: "20px",
          // margin: "auto 20px",
          // backgroundColor: "red",
          // marginBottom: "60px !important",
        }}
      >
        <Row style={{ width: "100%", overflow: "hidden" }}>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/ajs")}
          >
            <Card
              hoverable
              style={{
                width: 400,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      // maxWdith: "100%",
                      width: "400px",
                      height: "430px",
                      // // maxHeight: "100%",
                      // objectFit: "contain",
                      // backgroundColor: "white",
                    }}
                    alt="AJS Sports"
                    src="/images/ajs/Desktop - 1.png"
                  />
                </div>
              }
            >
              <Meta title="AJS Sports" />
            </Card>
          </Col>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/million-mart")}
          >
            <Card
              hoverable
              style={{
                width: 400,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      // maxWdith: "100%",
                      width: "400px",
                      height: "430px",
                      // // maxHeight: "100%",
                      // objectFit: "contain",
                      // backgroundColor: "white",
                    }}
                    alt="Million Mart"
                    src="/images/million/1-1-1024x551.png"
                  />
                </div>
              }
            >
              <Meta title="Million Mart" />
            </Card>
          </Col>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/bsport")}
          >
            <Card
              hoverable
              style={{
                width: 400,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      // maxWdith: "100%",
                      width: "400px",
                      height: "430px",
                      // // maxHeight: "100%",
                      // objectFit: "contain",
                      // backgroundColor: "white",
                    }}
                    alt="Million Mart"
                    src="/images/bsport/Gallery-1_1300px-700px-1024x551.png"
                  />
                </div>
              }
            >
              <Meta title="B Sport PSL 2020" />
            </Card>
          </Col>
        </Row>
        <Row style={{ width: "100%", overflow: "hidden" }}>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/edeel")}
          >
            <Card
              hoverable
              bordered={false}
              round={false}
              style={{
                width: 400,
                // height: 20,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      maxWdith: "100%",
                      width: "400px",
                      height: "425px",
                      // maxHeight: "100%",
                      backgroundColor: "white",
                    }}
                    alt="Adeel Bux"
                    src="/images/adeelbux/Sign IN UP.png"
                  />
                </div>
              }
            >
              <Meta title="Adeel Bux" />
            </Card>
          </Col>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/investment")}
          >
            <Card
              hoverable
              style={{
                width: 400,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      // maxWdith: "100%",
                      width: "400px",
                      height: "430px",
                      // // maxHeight: "100%",
                      // objectFit: "contain",
                      backgroundColor: "white",
                    }}
                    alt="Investment Mind"
                    src="/images/investment/Homepage.png"
                  />
                </div>
              }
            >
              <Meta title="Investment Mind" />
            </Card>
          </Col>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/lms")}
          >
            <Card
              hoverable
              style={{
                width: 400,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      // maxWdith: "100%",
                      width: "400px",
                      height: "430px",
                      // // maxHeight: "100%",
                      // objectFit: "contain",
                      // backgroundColor: "white",
                    }}
                    alt="LMS"
                    src="/images/lms/ezgif.com-gif-maker.jpg"
                  />
                </div>
              }
            >
              <Meta title="Learning Managment System" />
            </Card>
          </Col>
        </Row>
        <Row style={{ width: "100%", overflow: "hidden" }}>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/hrm")}
          >
            <Card
              hoverable
              style={{
                width: 400,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      // maxWdith: "100%",
                      width: "400px",
                      height: "430px",
                      // // maxHeight: "100%",
                      // objectFit: "contain",
                      // backgroundColor: "white",
                    }}
                    alt="HR Managment System"
                    src="/images/hrm/ezgif.com-gif-maker (2).png"
                  />
                </div>
              }
            >
              <Meta title="HRM Managment System" />
            </Card>
          </Col>
          <Col
            xl={8}
            lg={12}
            md={12}
            sm={24}
            style={{ marginBottom: "1rem" }}
            className="col"
            onClick={() => naviagte("/soceity")}
          >
            <Card
              hoverable
              bordered={false}
              round={false}
              style={{
                width: 400,
              }}
              cover={
                <div className="img">
                  <img
                    //   style={{ width: "400px", height: "400px" }}
                    style={{
                      maxWdith: "100%",
                      width: "400px",
                      height: "430px",
                      // maxHeight: "100%",
                      objectFit: "contain",
                      backgroundColor: "white",
                    }}
                    alt="Scoiety S1"
                    src="images/sone/Splash.png"
                  />
                </div>
              }
            >
              <Meta title="Social Soceity" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Projects;
