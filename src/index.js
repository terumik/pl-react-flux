import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import App from "./components/App"; // function component
// import AboutPage from './components/AboutPage'; // class component

// Render components to the DOM
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
); // 'root' from index.html
