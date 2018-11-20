import React from 'react'
import TextField from 'wix-style-react/TextField'
import Input from 'wix-style-react/Input'
import { formActions } from '../actions'
import { connect } from 'react-redux'
import { BackgroundContainer } from './'

class BackSideContainer extends React.Component {
    constructor(props){
        super(props)
        this.inputOnChange = this.inputOnChange.bind(this)
        this.checkboxOnChange = this.checkboxOnChange.bind(this)
        this.changeColorBackgroundBack = this.changeColorBackgroundBack.bind(this)
    }

    inputOnChange(e) {
        const { name, value } = e.target
        const { dispatch } = this.props
        dispatch(formActions.changeInputValue(name, value))
    }

    checkboxOnChange() {
        const { dispatch } = this.props
        dispatch(formActions.changeInputValue('isBackSideBackground', !this.props.form.isBackSideBackground))
    }

    changeColorBackgroundBack(e) {
        const color = e.hex()
        const { dispatch } = this.props
        dispatch(formActions.changeInputValue('backBackroundColor', color))
    }

    render(){
        const { companyName, backBackroundColor, backBackgroundImage, isBackSideBackground } = this.props.form
        return (<div data-hook="back-side">
            <TextField required>
                <label for="companyName">Company</label>
                <Input onChange={this.inputOnChange} placeholder="Please type in your company" name="companyName" value={companyName} dataHook="companyName-input"></Input>
            </TextField>
            <div>
                <label for="isBackgroundTabOpen">Background</label>
                <input type="checkbox" onChange={this.checkboxOnChange} name="isBackSideBackground" checked={isBackSideBackground} data-hook="isBackSideBackground-checkbox"/>
            </div>
{isBackSideBackground &&
    <BackgroundContainer color={backBackroundColor}  imageType='backBackgroundImage' changeColorBackground={this.changeColorBackgroundBack}/>}
        </div>)
    }
}

const mapStateToProps = (state) => ({
    form: state.form,
})

const connectedBackSideContainer = connect(mapStateToProps)(BackSideContainer)
export { connectedBackSideContainer as BackSideContainer }