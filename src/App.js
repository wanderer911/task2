import React, { Component } from 'react';
import './App.css';
import {ResulstSideContainer,LeftSideContainer} from './containers'
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftSideContainer/>
        <ResulstSideContainer/>
      </div>
    );
  }
}

const connectedApp = connect()(App);
export { connectedApp as App };