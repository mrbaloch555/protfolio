import {
  Card,
  Col,
  Row,
  Typography,
  Button,
  Checkbox,
  Form,
  Input,
  Alert,
  message,
} from "antd";
import { LinkedinFilled, LinkOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./contact.scss";
import axios from "axios";

const { TextArea } = Input;
const { Title } = Typography;
const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: null,
    message: null,
  });
  const location = useLocation();
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    if (location.pathname == "/about") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  });
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/email",
        formData
      );
      if (response.data.success) {
        alert("Email send successfully");
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact-wrapper" style={{ display: display }}>
      <div style={{ marginTop: "5rem", padding: "1rem" }}>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          autoComplete="off"
          // style={{ margin: "auto 30%" }}
          className="form"
        >
          <div style={{ padding: "1rem" }}>
            <Title className="title">Contact Me</Title>
            <h2
              style={{
                textAlign: "center",
                marginTop: "-1rem",
                marginBottom: "1rem",
              }}
            >
              Just leave me a message, and lets get in touch!
            </h2>
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <Form.Item
              // label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                style={{}}
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </Form.Item>
            <label>
              Message <span style={{ color: "red" }}>*</span>
            </label>
            <Form.Item
              // label="Message"
              name="messgae"
              rules={[{ required: true, message: "Please put your message!" }]}
            >
              <Form.Item>
                <TextArea
                  rows={4}
                  name="message"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item style={{ float: "right", width: "37%" }}>
              <Button type="danger" htmlType="submit" style={{ width: "100%" }}>
                Submit
              </Button>
            </Form.Item>
            <div
              style={{
                // justifyContent: "center",
                // alignContent: "center",
                // marginTop: "2rem",
                width: "95%",
                float: "right",
                // position: "relative",
                // top: "8vh",
                position: "relative",
                left: "35%",
              }}
            >
              <a style={{ textDecoration: "none", color: "white" }} href="">
                <span>
                  <LinkedinFilled
                    alt="linkedin"
                    style={{
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  />
                </span>
              </a>
              <a style={{ textDecoration: "none", color: "white" }} href="">
                <span>
                  <LinkOutlined
                    style={{ fontSize: "30px", marginLeft: "2rem" }}
                    alt="upwork"
                  />
                </span>
              </a>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
