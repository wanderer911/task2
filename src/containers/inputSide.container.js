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
        this.checkboxOnChange = this.checkboxOnChange.bind(this)
        this.changeColorBackgroundFront = this.changeColorBackgroundFront.bind(this)
    }

    inputOnChange(e) {
        const { name, value } = e.target
        const { dispatch } = this.props
        console.log(name, value)
        dispatch(formActions.changeInputValue(name, value))
    }

    checkboxOnChange() {
        const { dispatch } = this.props
        const { isFrontSideBackground } = this.props.form
        dispatch(formActions.changeInputValue('isFrontSideBackground', !isFrontSideBackground))
    }
    changeColorBackgroundFront(e) {
        const color = e.hex()
        const { dispatch } = this.props
        dispatch(formActions.changeInputValue('frontBackgroundColor', color))
    }

    render() {
        const { name, lastName, title, telephone, email, frontBackgroundColor, logo, frontBackgroundImage, isFrontSideBackground } = this.props.form
        return (
            <div data-hook="input-side">
                <TextField required>
                    <label appearance="T1.1" for="name">Name</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in your first name" name="name" value={name} dataHook="first-name"></Input>
                </TextField>
                <TextField required>
                    <label appearance="T1.1" for="lastName">Last name</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in your last name" name="lastName" value={lastName} dataHook="last-name"></Input>
                </TextField>
                <BackgroundContainer color={false} image={logo} imageType='logo' changeColorBackground={false} />
                <TextField required>
                    <label appearance="T1.1" for="title">Title</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in title" name="title" value={title} dataHook="title"></Input>
                </TextField>
                <TextField required>
                    <label appearance="T1.1" for="telephone">telephone</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in your telephone" name="telephone" value={telephone}></Input>
                </TextField>
                <TextField required>
                    <label appearance="T1.1" for="email">Email</label>
                    <Input onChange={this.inputOnChange} type="email" placeholder="Please type in your email" name="email" value={email}></Input>
                </TextField>
                <div>
                    <label for="isBackgroundTabOpen">Background</label>
                    <input type="checkbox" onChange={this.checkboxOnChange} checked={isFrontSideBackground} name="frontVisilibility" />
                </div>
                {isFrontSideBackground &&
                    <BackgroundContainer color={frontBackgroundColor} image={frontBackgroundImage} imageType='frontBackgroundImage' changeColorBackground={this.changeColorBackgroundFront} />}
            </div>)
    }
}

const mapStateToProps = (state) => ({
    form: state.form
})

const connectedInputSideContainer = connect(mapStateToProps)(InputSideContainer)
export { connectedInputSideContainer as InputSideContainer }
