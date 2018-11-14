import React from 'react'
import TextField from 'wix-style-react/TextField'
import Input from 'wix-style-react/Input'
import { formActions } from '../actions'
import { connect } from 'react-redux'

class BackSideContainer extends React.Component {
    constructor(props){
        super(props)
        this.inputOnChange = this.inputOnChange.bind(this)
    }

    inputOnChange(e) {
        const { name, value } = e.target
        const { dispatch } = this.props
        dispatch(formActions.changeInputValue(name, value))
    }

    render(){
        const { companyName } = this.props.form
        return (<div data-hook="back-side">
            <TextField required>
                <label for="companyName">Company</label>
                <Input onChange={this.inputOnChange} placeholder="Please type in your company" name="companyName" value={companyName} dataHook="companyName-input"></Input>
            </TextField>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    form: state.form,
})

const connectedBackSideContainer = connect(mapStateToProps)(BackSideContainer)
export { connectedBackSideContainer as BackSideContainer }