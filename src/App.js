import React, { Component } from 'react';
import './App.css';
import {ResulstSideContainer,LeftSideContainer} from './containers'
export class App extends Component {
  render() {
    return (
      <div className="grid">
        <LeftSideContainer/>
        <ResulstSideContainer/>
      </div>
    );
  }
}