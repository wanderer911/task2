import React, { Component } from 'react'
import { ResulstSideContainer, LeftSideContainer } from './containers'


export class App extends Component {
  constructor(props){
    super(props)
    this.showFinal = this.showFinal.bind(this)
    this.state = {
      finalShowed: false,
      containerClass: 'result-container'
    }
  }
  showFinal(){
    console.log('final click')
    this.setState({finalShowed: true,containerClass: 'result-container-final'})
  }
  render() {
    const {showFinal,state:{containerClass,finalShowed}} = this
    return (
      <div className="grid">
        {!finalShowed && <LeftSideContainer onFinalClick={showFinal}/>}
        <ResulstSideContainer containerClass={containerClass}/>
      </div>
    )
  }
}