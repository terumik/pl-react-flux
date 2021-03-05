import React from "react";

// Components
import HomePage from "./HomePage"; // function component
import AboutPage from "./AboutPage"; // class component
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import ManageCoursePage from "../ManageCoursePage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// decide which page to render (like a router but not SPA route)
function App() {
  // header and the page
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
      <Header></Header>
      <Switch>
        {/* Order matters */}
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/course/:slug" component={ManageCoursePage}></Route>
        <Route path="/course" component={ManageCoursePage}></Route>
        <Redirect from="/about-page" to="/about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
