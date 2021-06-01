import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch,useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Layout from "../hocs/Layout";
import Signup from "./Signup";
import ResetPasswordConfirm from "./ResetPasswordConfirm";
import ResetPassword from "./ResetPassword";
import Activate from "./Activate";
import Starter from "./Starter";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthenticated, load_user } from "../Redux/Action/auth";
const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticated);
    dispatch(load_user());
  }, []);
  return (
    <div>
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/">
            <Starter />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/facebook" component={Facebook} />
            <Route exact path="/google" component={Google} /> */}
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <Route exact path="/activate/:uid/:token" component={Activate} />
        </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default Main;
