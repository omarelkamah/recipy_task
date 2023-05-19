import "antd/dist/antd.min.css";
import "./styles/globals.scss";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
