import React, {Component, Fragment} from 'react';
import Layout from "./components/Layout/Layout";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";

class App extends Component {
  render() {
    return (
      <Fragment>
          <Layout>
              <Container>
                  <Switch>
                      <Route path="/" exact render={() => <h1>Home</h1>}/>
                  </Switch>
              </Container>
          </Layout>
      </Fragment>
    );
  }
}

export default App;
