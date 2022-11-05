import React from "react";
import "./notfound.scss";
import { FrownFilled } from "@ant-design/icons";
import { Typography } from "antd";
const { Title } = Typography;
const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="landing">
        <div className="intro">
          <Title className="title">Oops, Page Not Found!</Title>
          {/* <FrownFilled /> */}
          <FrownFilled className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
