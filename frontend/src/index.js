import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";
import Darkmode from "darkmode-js";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const options = {
//   bottom: "64px",
//   right: "unset",
//   left: "32px",
//   time: "0.5s",
//   // mixColor: "#fff",
//   backgroundColor: "#fff",
//   buttonColorDark: "#f0f0f0",
//   buttonColorLight: "#000",
//   saveInCookies: true,
//   label: "🌓",
//   autoMatchOsTheme: false,
// };

// const darkmode = new Darkmode(options);
// darkmode.showWidget();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
