import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Etc, Home, Team } from 'pages';
import {Header, Footer} from 'components';
import {JoinContainer} from 'containers'

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home/" component={Home}/>
          <Route exact path="/home/join" component={JoinContainer}/>
          <Route exact path="/etc" component={Etc}/>
          <Route exact path="/team" component={Team}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
