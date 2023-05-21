import "antd/dist/antd.min.css";
import "./styles/globals.scss";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { ConfigProvider } from "antd";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
