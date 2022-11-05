import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  FundProjectionScreenOutlined,
  InfoCircleOutlined,
  DownCircleOutlined,
  ContactsOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./layout.scss";
import { Avatar } from "antd";
import { Layout, Menu } from "antd";
import Item from "antd/lib/list/Item";
import React, { useState } from "react";
import { Link, Outlet, redirect, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [displayBox, setDisplayBox] = useState(false);
  return (
    <Layout style={{ padding: "0px", margin: "0px" }} className="layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
        style={{
          minHeight: "100vh",
          position: "fixed",
          zIndex: 1,
        }}
      >
        {/* <Menu theme="dark" mode="inline" style={{ padding: "10px" }}>
          <Item>Durrah Khan</Item>
        </Menu> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            // marginTop: "-19px",
            marginTop: "60px",
            // padding: "10px",
          }}
        >
          <Menu.Item title="Durrah Khan" style={{}} key="1">
            <UserOutlined />
            <span>Durrah Khan</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item>
            <FundProjectionScreenOutlined />
            <span>Projects</span>
            <Link to="/projects" />
          </Menu.Item>
          <Menu.Item>
            <SettingOutlined />
            <span>Skills</span>
            <Link to="/skills" />
          </Menu.Item>
          <Menu.Item>
            <InfoCircleOutlined />
            <span>About</span>
            <Link to="/about" />
          </Menu.Item>
          <Menu.Item>
            <DownCircleOutlined />
            <span>Curriculum vitae</span>
            <a
              href="/Durrah Khan CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Menu.Item>
          <Menu.Item>
            <ContactsOutlined />
            <span>Contact</span>
            <Link to="/contact" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ margin: "0px", padding: "0px" }}>
        <Header
          className="site-layout-background header"
          style={{
            padding: "10px",
            display: "flex",
            // borderBottom: "2px solid #0b6ee7",
            width: "100%",
            position: "fixed",
            zIndex: 1,
          }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined
              className="trigger"
              color="white"
              style={{
                fontSize: "40px",
                marginLeft: "5px",
                color: "white",
              }}
              onClick={() => setCollapsed(!collapsed)}
            ></MenuUnfoldOutlined>
          ) : (
            <MenuFoldOutlined
              className="trigger"
              color="light"
              style={{
                fontSize: "40px",
                marginLeft: "5px",
                color: "white",
              }}
              onClick={() => setCollapsed(!collapsed)}
            ></MenuFoldOutlined>
          )}
          {/* {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )} */}
          <div
            style={{
              marginLeft: "auto",
              marginTop: "0px",
              // marginBottom: "0px",
            }}
          >
            <div style={{ display: "flex" }}>
              <h1
                className=""
                style={{ marginRight: "20px", marginTop: "-10px" }}
              >
                Durrah Khan
              </h1>
              <Avatar
                size={45}
                // icon={<UserOutlined />}
                style={{ marginTop: "0px", cursor: "pointer" }}
                src="/images/dk.jpeg"
                onClick={() => {
                  setDisplayBox(!displayBox);
                }}
              />
              <div
                className={`${displayBox ? "avatar-box" : ""}  `}
                style={{ display: displayBox ? "block" : "none" }}
              >
                <ul style={{ width: "100%", padding: "" }}>
                  <li>
                    <div>
                      <Link to="/">
                        <UserOutlined style={{ marginRight: "15px" }} />
                        <span>Durrah Khan</span>
                        {/* <Link to="/" /> */}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Link to="/projects">
                        <FundProjectionScreenOutlined
                          style={{ marginRight: "15px" }}
                        />
                        <span>Projects</span>
                        {/* <Link to="/projects" /> */}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Link to="/about">
                        <InfoCircleOutlined style={{ marginRight: "15px" }} />
                        <span>About</span>
                        {/* <Link  /> */}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Link to="/skills">
                        <SettingOutlined style={{ marginRight: "15px" }} />
                        <span>Skills</span>
                        {/* <a
                      href="/Durrah Khan CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    /> */}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Link to="/contact">
                        <ContactsOutlined style={{ marginRight: "15px" }} />
                        <span>Contact</span>

                        {/* <Link to="/contact" /> */}
                      </Link>
                    </div>
                  </li>
                </ul>
                <div className={`${displayBox ? "triangle" : ""}  `}></div>
              </div>
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            // margin: "24px 16px",
            // padding: 24,
            // minHeight: "80vh",
            color: "black !important",
            backgroundColor: "#EEEEEE",
            paddingLeft: "5rem",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
