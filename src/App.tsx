import React from "react";
import * as Styled from "./App.styles";
import Header from "./components/header/header";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login/login";
import Notifications from "./components/notifications/notification";
import history from "./browserhistory";

const App = (): React.ReactElement => {
  return (
    <Styled.App>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/notifications"
            render={() => (
              <>
                <Header />
                <Styled.MainContent>
                  <Notifications />
                </Styled.MainContent>
              </>
            )}
          />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </Styled.App>
  );
};

export default App;
