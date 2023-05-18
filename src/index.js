import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
      <ToastContainer/>
      <App />
  </Provider>,
  document.getElementById("root")
);
