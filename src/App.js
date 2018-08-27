import React, { Component } from 'react';
import './App.css';
import {InputSideContainer} from './containers'
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <InputSideContainer/>
        <div>Hello world</div>
      </div>
    );
  }
}

const connectedApp = connect()(App);
export { connectedApp as App };