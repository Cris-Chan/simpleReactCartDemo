import React from "react";
import ReactDOM from "react-dom";
import Counters from "./components/counters";
import App from "./components/App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
