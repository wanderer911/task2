import React from 'react'
import TextField from 'wix-style-react/TextField'
import Input from 'wix-style-react/Input'
import { formActions } from '../actions'
import { connect } from 'react-redux'
import { BackgroundContainer } from './'

class InputSideContainer extends React.Component {
    constructor(props) {
        super(props)
        this.inputOnChange = this.inputOnChange.bind(this)
    }

    inputOnChange(e) {
        const { name, value } = e.target
        const { dispatch } = this.props
        dispatch(formActions.changeInputValue(name, value))
    }

    render() {
        const { name, lastName, title, telephone, email, logo } = this.props.form
        return (
            <div data-hook="input-side">
                <TextField required>
                    <label for="name">Name</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in your first name" name="name" value={name} dataHook="first-name-input"></Input>
                </TextField>
                <TextField required>
                    <label for="lastName">Last name</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in your last name" name="lastName" value={lastName} dataHook="last-name-input"></Input>
                </TextField>
                <BackgroundContainer color={false} image={logo} imageType='logo' changeColorBackground={false} />
                <TextField required>
                    <label for="title">Title</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in title" name="title" value={title} dataHook="title-input"></Input>
                </TextField>
                <TextField required>
                    <label for="telephone">telephone</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in your telephone" name="telephone" value={telephone} dataHook="telephone-input"></Input>
                </TextField>
                <TextField required>
                    <label for="email">Email</label>
                    <Input onChange={this.inputOnChange} type="email" placeholder="Please type in your email" name="email" value={email} dataHook="email-input"></Input>
                </TextField>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    form: state.form
})

const connectedInputSideContainer = connect(mapStateToProps)(InputSideContainer)
export { connectedInputSideContainer as InputSideContainer }