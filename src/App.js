import React, {Component, Fragment} from 'react';
import Layout from "./components/Layout/Layout";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Fragment>
          <Layout>
              <Container>
                  <Switch>
                      <Route path="/home" exact render={() => <h1>Home</h1>}/>
                      <Route path="/git" render={() => <h1>Git</h1>}/>
                  </Switch>
              </Container>
          </Layout>
      </Fragment>
    );
  }
}

export default App;
