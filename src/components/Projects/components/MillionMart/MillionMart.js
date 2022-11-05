import React from "react";
import "./million.scss";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const MillionMart = () => {
  return (
    <div className="million-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">E-COMMERCE MARKETPLACE - MILLION MART</Title>
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
          </div>
        </div>
      </div>

      <div className="description-wrapper">
        <div className="des-contents">
          <Title className="title">Million Mart</Title>
          <div
            style={{ padding: "1.5rem", fontSize: "16px", color: "#999999" }}
          >
            <p>
              <a
                href="https://www.millionmart.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "orange" }}
              >
                Million Mart
              </a>{" "}
              mobile is an e-commerce mobile app. User can sign-up or login to
              get access to necessary features for buying and selling. User can
              view various products categorized in different categories. Million
              Mart offers many features to aid and assist the user. Be it
              language or currency change, search by voice, image or keywords,
              suggesting items by listing it in trending, new arrival, featured,
              deals, collections or sales and many more.
            </p>
            {/* <br></br> */}
            <b>Description</b>
            <p>
              A user needs to first sign up with an authentic account to have
              their related credentials stored in the website’s database so that
              they can shop more freely. They need to provide their login info,
              credential info and payment info.
            </p>

            <b>Search:</b>
            <p>
              The user can search the type of product they want through the
              search bar. There they’ll have to search by keywords, image or
              voice. The results will show the product or similar to description
              by the user. User can select any product for further inquiries.
              User can also search multiple searches at the same time. It helps
              shop better and easily if you have preplanned products in mind and
              have no time to search around individually.
            </p>
            <b>Cart/Wish-List:</b>
            <p>
              User can store product in cart or wish-list. In cart, user can
              either add or remove a product they want or don’t. And if they
              really want to purchase they can proceed to checkout through cart,
              where after filling necessary information on payment method, they
              can confirm the order. If they don’t want to buy a product anytime
              soon but still want to keep that product relevant for future
              purchase, they can add it on wish-list.
            </p>

            <b>Compare:</b>
            <p>
              If a user is struggling to choose between two or more items, they
              can simply compare. The compare option allows the site to tell the
              user about relative pros and cons of the products they have
              selected. This helps to make shopping easier.
            </p>
            <b>Vendor:</b>
            <p>
              User can even market their products on Million Mart. All they have
              to do is to make a vendor account and provide the necessary
              details on what they are selling. It also supports multiple
              vendors by the same party.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              List of Modules
            </p>
            <span>Some important modules list, its not complete list!</span>
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
          </div>
          <div className="pro-images">
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/million/1-1-1024x551.png"></img>
              </Col>
            </Row>
            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/million/2-1-1024x551.png"></img>
              </Col>
            </Row>

            <Row style={{ margin: "auto 2%" }}>
              <Col sm={24} md={24} lg={24} xl={24} className="col">
                <img src="/images/million/5-1024x551.png"></img>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillionMart;
