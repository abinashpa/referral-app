import React, { useState, useEffect } from "react";

import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "./Dashboard";
import PageLoader from "./PageLoader";
import Refer from "./Refer";
import SignIn from "./Signin";
import Signup from "./Signup";

import { registerIntercepts, setAuthHeaders } from "../apis/axios";
import { initializeLogger } from "../utils/logger";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  const PrivateRoutes = () => (
    <>
      <Route exact component={Dashboard} path="/" />
      <Route exact component={Refer} path="/refer" />
    </>
  );

  const PublicRoutes = () => (
    <>
      <Route exact component={Signup} path="/signup" />
      <Route exact path="/signin">
        <SignIn setIsLoggedIn={setIsLoggedIn} />
      </Route>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
    </>
  );

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </Router>
  );
};

export default App;
