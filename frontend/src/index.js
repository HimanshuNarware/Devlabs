// index.js
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

 // Ensure BrowserRouter is imported here



import Preloader from "./Component/Preloader";


const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  bottom: "unset",
  left: "15px",
  time: "0.5s",
  mixColor: "#fff",
  backgroundColor: "#051626",
  buttonColorDark: "#8758f6",
  buttonColorLight: "#FFFBF5",
  saveInCookies: true,
  label: "🌓",
  autoMatchOsTheme: true,
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

root.render(
  <Provider store={store}>p
    <BrowserRouter> {/* Ensure BrowserRouter is only here */}
      <App />

      <ToastContainer />
      <App /> 
      <ToastContainer/>

    </BrowserRouter>
  </Provider>
);