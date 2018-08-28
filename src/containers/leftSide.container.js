import React from 'react'
import {InputSideContainer,BackSideContainer} from './'
import Button from 'wix-style-react/Button';
import {visibilityActions} from '../actions'
import { connect } from 'react-redux';
class LeftSideContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {toggleSideVisibility} = this.props;
        const {sideVisibility} = this.props.visibility;
        return (<div>
            {sideVisibility? <InputSideContainer/>:<BackSideContainer/>}
            <div style={{'margin-top':'20px'}}> 
                <Button onClick={toggleSideVisibility} >Go to BS</Button>
                <Button onClick={console.log} >Finish</Button>
            </div>
        </div>)
    }
}


const mapStateToProps = (state) => ({
    form: state.form,
    visibility: state.visibility
})

const mapDispatchToProps = dispatch => ({
	toggleSideVisibility: () => dispatch(visibilityActions.toggleSideVisibility()) 
});

const connectedLeftSideContainer = connect(mapStateToProps,mapDispatchToProps)(LeftSideContainer);
export {connectedLeftSideContainer as LeftSideContainer};