import React from 'react'
import TextField from 'wix-style-react/TextField'
import Input from 'wix-style-react/Input'
import { formActions} from '../actions'
import { connect } from 'react-redux'
import {BackgroundContainer} from './'

class BackSideContainer extends React.Component {
    constructor(props){
        super(props)
        this.inputOnChange = this.inputOnChange.bind(this)
        this.checkboxOnChange = this.checkboxOnChange.bind(this)
        this.changeColorBackgroundBack = this.changeColorBackgroundBack.bind(this)

    }
    inputOnChange(e){
        const {name,value} = e.target
        const {dispatch} = this.props
        console.log(name,value)
        dispatch(formActions.changeInputValue(name,value))
    }
    checkboxOnChange(){
        const {dispatch} = this.props
        dispatch(formActions.changeInputValue('isBackSideBackground',!this.props.form.isBackSideBackground))
    }

    changeColorBackgroundBack(e){
        const color = e.hex()
        const {dispatch} = this.props
        dispatch(formActions.changeInputValue('backBackroundColor',color))
    }
    render(){
        const {companyName,backBackroundColor,backBackgroundImage,isBackSideBackground} = this.props.form
        return (<div>
            <TextField required>
                <label  appearance="T1.1" for="companyName">Company</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your company" name="companyName" value={companyName}></Input>
            </TextField>
            <div>
                <label  for="isBackgroundTabOpen">Background</label>
                <input type="checkbox" onChange={this.checkboxOnChange} name="isBackSideBackground" checked={isBackSideBackground}/>
            </div>
            {isBackSideBackground && 
            <BackgroundContainer color={backBackroundColor} image={backBackgroundImage} imageType='backBackgroundImage' changeColorBackground={this.changeColorBackgroundBack}/>}
        </div>)
    }
}


const mapStateToProps = (state) => ({
    form: state.form,
})

const connectedBackSideContainer = connect(mapStateToProps)(BackSideContainer)
export {connectedBackSideContainer as BackSideContainer}