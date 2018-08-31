import React from 'react';
import TextField from 'wix-style-react/TextField';
import Input from 'wix-style-react/Input';
import Button from 'wix-style-react/Button';
import Modal from 'wix-style-react/Modal'
import ColorPicker from 'wix-style-react/ColorPicker';
import {MessageBoxFunctionalLayout} from 'wix-style-react/MessageBox';
import {ImageModalContainer} from './imageModal.container';
import { formActions,visibilityActions} from '../actions'
import { connect } from 'react-redux';

class BackSideContainer extends React.Component {
    constructor(props){
        super(props)
        this.inputOnChange = this.inputOnChange.bind(this);
        this.checkboxOnChange = this.checkboxOnChange.bind(this);
        this.changeColorBackgroundBack = this.changeColorBackgroundBack.bind(this);
        this.state = {
            isOpenBackgroundModal: false,
            isBackgroundTabOpen:false
        };
    }
    inputOnChange(e){
        const {name,value} = e.target;
        const {dispatch} = this.props;
        console.log(name,value);
        dispatch(formActions.changeInputValue(name,value));
    }
    //hello world commit
    checkboxOnChange(){
        const {dispatch} = this.props;
        dispatch(visibilityActions.toggleBackVisibility());
    }

    changeColorBackgroundBack(e){
        const color = e.hex();
        const {dispatch} = this.props;
        dispatch(formActions.changeInputValue('backBackroundColor',color));
    }

    render(){
        const {companyName,backBackroundColor,backBackgroundImage} = this.props.form;
        const {backVisibility} = this.props.visibility;
        const setState = state => () => this.setState(state);
        const openBackgroundModal = setState({isOpenBackgroundModal: true});
        const closeBackgroundModal = setState({isOpenBackgroundModal: false});
        return (<div>
            <TextField required>
                <label  appearance="T1.1" for="companyName">Company</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your company" name="companyName" value={companyName}></Input>
            </TextField>
            <div>
                <label  for="isBackgroundTabOpen">Background</label>
                <input type="checkbox" onChange={this.checkboxOnChange} name="backVisibility"/>
            </div>
            {backVisibility && 
                <div>
                    <div>
                        <ColorPicker
                            onCancel={() => "Cancelled"}
                            onChange={e => e.hex()}
                            onConfirm={this.changeColorBackgroundBack}
                            showConverter={false}
                            value={backBackroundColor}
                        />
                        <label  for="isBackgroundTabOpen">Color</label>
                    </div>
                    <div>
                        {!backBackgroundImage && <div style={{float:'left',height:'50px',width:'50px',backgroundColor:backBackroundColor}}></div>}
                        {backBackgroundImage && <img src={backBackgroundImage} style={{float:'left',height:'50px',width:'50px'}}/>}
                        <p>Image </p>
                        <Button onClick={openBackgroundModal} dataHook="open-background-modal-button">Choose</Button>
                        <Modal
                            isOpen={this.state.isOpenBackgroundModal}
                            onRequestClose={closeBackgroundModal}
                            contentLabel="Background modal example"
                            >
                            <MessageBoxFunctionalLayout
                                cancelText="Cancel"
                                confirmText="OK"
                                dataHook="background-modal"
                                fullscreen
                                onCancel={closeBackgroundModal}
                                onOk={closeBackgroundModal}
                                theme="blue"
                                title="Full screen modal"
                                >
                                <ImageModalContainer imageType='backBackgroundImage'/>
                            </MessageBoxFunctionalLayout>
                        </Modal>
                    </div>
                </div>
                }
        </div>)
    }
}


const mapStateToProps = (state) => ({
    form: state.form,
    visibility: state.visibility
})

const connectedBackSideContainer = connect(mapStateToProps)(BackSideContainer);
export {connectedBackSideContainer as BackSideContainer};