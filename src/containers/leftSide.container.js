import React from 'react'
import Button from 'wix-style-react/Button'
import { formActions } from '../actions'
import { connect } from 'react-redux'
import { InputSideContainer, BackSideContainer } from './'


class LeftSideContainer extends React.Component {
    constructor(props) {
        super(props)
        this.toggleSideVisibility = this.toggleSideVisibility.bind(this)
    }

    toggleSideVisibility() {
        const { isFrontSideSelected } = this.props.form
        const { dispatch } = this.props
        dispatch(formActions.changeInputValue('isFrontSideSelected', !isFrontSideSelected))
    }

    render() {
        const { toggleSideVisibility , props:{onFinalClick, form: { isFrontSideSelected }}} = this
        return (<div className="left" data-hook="left">
            {isFrontSideSelected ? <InputSideContainer /> : <BackSideContainer />}
            <div className="margin-top20 ">
                <Button dataHook="toggleSideVisibility-button" onClick={toggleSideVisibility} >{isFrontSideSelected ? 'Go to BS' : 'Go to FS'} </Button>
                <Button onClick={onFinalClick} dataHook="finish-button">Finish</Button>
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    form: state.form,
})

const connectedLeftSideContainer = connect(mapStateToProps)(LeftSideContainer)
export { connectedLeftSideContainer as LeftSideContainer }