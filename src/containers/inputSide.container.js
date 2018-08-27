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

class InputSideContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.inputOnChange = this.inputOnChange.bind(this);
        this.checkboxOnChange = this.checkboxOnChange.bind(this);
        this.changeColorBackgroundFront = this.changeColorBackgroundFront.bind(this);
        this.state = {
            // firstName: '',
            // lastName: '',
            // title: '',
            // telephone: '',
            // email: '',
            // frontSideBackgroundcolor: '#FFFFFF',
            isOpenFullScreenModal: false,
            isOpenBackgroundModal: false,
            isBackgroundTabOpen:false
        };
    }
    componentDidMount(){
        this.props.dispatch(formActions.getInputValues())
        this.props.dispatch(visibilityActions.getAllVisibilities);
    }
    inputOnChange(e){
        const {name,value} = e.target;
        const {dispatch} = this.props;
        console.log(name,value);
        dispatch(formActions.changeInputValue(name,value));
    }

    checkboxOnChange(){
        const {dispatch} = this.props;
        dispatch(visibilityActions.toggleFrontVisibility());
    }
    changeColorBackgroundFront(e){
        const color = e.hex();
        const {dispatch} = this.props;
        dispatch(formActions.changeInputValue('frontBackgroundColor',color));
        
    }
    render(){
        const {firstName,lastName,title,telephone,email,frontBackgroundColor} = this.props.form;
        const {frontVisilibility} = this.props.visibility;
        const setState = state => () => this.setState(state);
        const closeFullScreenModal = setState({isOpenFullScreenModal: false});
        const openFullScreenModal = setState({isOpenFullScreenModal: true});
        const openBackgroundModal = setState({isOpenBackgroundModal: true});
        const closeBackgroundModal = setState({isOpenBackgroundModal: false});
        return (
        <div>
            <TextField required>
                <label  appearance="T1.1" for="nameame">Name</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your first name" name="name" value={firstName}></Input>
            </TextField>
            <TextField required>
                <label  appearance="T1.1" for="lastName">Last name</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your last name" name="lastName" value={lastName}></Input>
            </TextField>
            <div>
                <div style={{float:'left',height:'50px',width:'50px',backgroundColor:"green"}}></div>
                <p>Logo </p>
                <Button onClick={openFullScreenModal} dataHook="open-full-screen-modal-button">Choose</Button>
                <Modal
                    isOpen={this.state.isOpenFullScreenModal}
                    onRequestClose={closeFullScreenModal}
                    contentLabel="Full screen modal example"
                    >
                    <MessageBoxFunctionalLayout
                        cancelText="Cancel"
                        confirmText="OK"
                        dataHook="fullscreen-modal"
                        fullscreen
                        onCancel={closeFullScreenModal}
                        onOk={closeFullScreenModal}
                        theme="blue"
                        title="Full screen modal"
                        >
                       <ImageModalContainer/>
                    </MessageBoxFunctionalLayout>
                </Modal>
            </div>
            <TextField required>
                <label  appearance="T1.1" for="title">Title</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in title" name="title" value={title}></Input>
            </TextField>
            <TextField required>
                <label  appearance="T1.1" for="telephone">telephone</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your telephone" name="telephone" value={telephone}></Input>
            </TextField>
            <TextField required>
                <label  appearance="T1.1" for="email">Email</label>
                <Input  onChange={this.inputOnChange}  type="email" placeholder="Please type in your email" name="email" value={email}></Input>
            </TextField>
            <div>
                <label  for="isBackgroundTabOpen">Background</label>
                <input type="checkbox" onChange={this.checkboxOnChange} name="frontVisilibility"/>
            </div>
            {frontVisilibility && 
            <div>
                <div>
                    <ColorPicker
                        onCancel={() => "Cancelled"}
                        onChange={e => e.hex()}
                        onConfirm={this.changeColorBackgroundFront}
                        showConverter={false}
                        value={frontBackgroundColor}
                    />
                    <label  for="isBackgroundTabOpen">Color</label>
                </div>
                <div>
                    <div style={{float:'left',height:'50px',width:'50px',backgroundColor:"yellow"}}></div>
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
                            <ImageModalContainer/>
                        </MessageBoxFunctionalLayout>
                    </Modal>
                </div>
            </div>
            }
        <div style={{'margin-top':'20px'}}> 
            <Button onClick={console.log} >Go to BS</Button>
            <Button onClick={console.log} >Finish</Button></div>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    form: state.form,
    visibility: state.visibility
})

// const mapDispatchToProps = dispatch => ({
	// onPeriodChange: (e) => dispatch(forecastPeriodActions.set(e)),
	// getPeriod: () => dispatch(forecastPeriodActions.get()),
	// onScaleChange: () => dispatch(scaleActions.toggle()),
    // fetchScale: () => dispatch(scaleActions.get()) ,
//     getInputValues:()=>dispatch(formActions.getInputValues()),
//     dispatch:()
// });

const connectedInputSideContainer = connect(mapStateToProps)(InputSideContainer);
export {connectedInputSideContainer as InputSideContainer};