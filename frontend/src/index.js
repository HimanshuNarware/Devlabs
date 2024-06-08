import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import Darkmode from "darkmode-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  bottom: "unset",
  left: "15px",
  time: "0.5s",
  mixColor: "#fff",
  backgroundColor: "#fff",
  buttonColorDark: "#f0f0f0",
  buttonColorLight: "#100f2c",
  saveInCookies: true,
  label: "🌓",
  autoMatchOsTheme: true,
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* <Preloader /> */}
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);