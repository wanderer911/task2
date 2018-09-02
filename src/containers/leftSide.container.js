import React from 'react'
import {InputSideContainer,BackSideContainer} from './'
import Button from 'wix-style-react/Button'
import {formActions} from '../actions'
import { connect } from 'react-redux'

class LeftSideContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {toggleSideVisibility} = this.props;
        const {isFrontSideSelected} = this.props.form;
        return (<div  className="left">
            {isFrontSideSelected? <InputSideContainer/>:<BackSideContainer/>}
            <div style={{'margin-top':'20px'}}> 
                <Button onClick={toggleSideVisibility} >{isFrontSideSelected?'Go to BS':'Go to FS'}</Button>
                <Button onClick={console.log} >Finish</Button>
            </div>
        </div>)
    }
}


const mapStateToProps = (state) => ({
    form: state.form
})

const mapDispatchToProps = (dispatch,currentState) => ({
	toggleSideVisibility: () => dispatch(formActions.changeInputValue('isFrontSideSelected',!currentState().form.isFrontSideSelected)) 
})

const connectedLeftSideContainer = connect(mapStateToProps,mapDispatchToProps)(LeftSideContainer)
export {connectedLeftSideContainer as LeftSideContainer}