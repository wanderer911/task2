import React, { Component } from 'react';
import './App.css';
import {InputSideContainer} from './containers'

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

export default App;
