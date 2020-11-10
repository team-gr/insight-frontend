import React from "react";
import { Card, Spin } from "antd";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} />;

const Custom = () => <Spin indicator={antIcon} />;

export default Custom;
