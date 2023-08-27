import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
/*import "bootstrap/dist/css/bootstrap.min.css";*/
import "bootstrap/dist/js/bootstrap.min";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-confirm-alert/src/react-confirm-alert.css";
import {BrowserRouter} from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
