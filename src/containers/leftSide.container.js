import React from 'react'
import { InputSideContainer, BackSideContainer } from './'
import Button from 'wix-style-react/Button'
import { formActions } from '../actions'
import { connect } from 'react-redux'


class LeftSideContainer extends React.Component {
    constructor(props) {
        super(props)
        this.toggleSideVisibility = this.toggleSideVisibility.bind(this)
    }

    toggleSideVisibility() {
        const { isFrontSideSelected } = this.props.form
        const { dispatch } = this.props
        console.log(isFrontSideSelected)
        dispatch(formActions.changeInputValue('isFrontSideSelected', !isFrontSideSelected))
    }

    render() {
        const { toggleSideVisibility } = this
        const { isFrontSideSelected } = this.props.form
        return (<div className="left">
            {isFrontSideSelected ? <InputSideContainer /> : <BackSideContainer />}
            <div style={{ 'margin-top': '20px' }}>
                <Button onClick={toggleSideVisibility} >{isFrontSideSelected ? 'Go to BS' : 'Go to FS'}</Button>
                <Button onClick={console.log} >Finish</Button>
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    form: state.form,
    flickr: state.flickr
})

const connectedLeftSideContainer = connect(mapStateToProps)(LeftSideContainer)
export { connectedLeftSideContainer as LeftSideContainer }