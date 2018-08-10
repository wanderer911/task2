import React from 'react';
import TextField from 'wix-style-react/TextField';
import Input from 'wix-style-react/Input';
import Button from 'wix-style-react/Button';
import Modal from 'wix-style-react/Modal'
import {MessageBoxFunctionalLayout} from 'wix-style-react/MessageBox';
// import Checkbox from 'wix-style-react/Checkbox';


export class InputSideContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.inputOnChange = this.inputOnChange.bind(this);
        this.checkboxOnChange = this.checkboxOnChange.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            telephone: '',
            email: '',
            frontSideBackgroundcolor: '#FFFFFF',
            isOpenFullScreenModal: false,
            isOpenBackgroundModal: false,
            isBackgroundTabOpen:false
        };
    }

    inputOnChange(e){
        const {name,value} = e.target;
        console.log(name,value,this.state);
        
        this.setState({ [name]: value });
    }

    checkboxOnChange(e){
        const {name,checked} = e.target;
        this.setState({ [name]: checked });
    }
    
    render(){
        const {firstName,lastName,title,telephone,email,isBackgroundTabOpen,frontSideBackgroundcolor} = this.state;
        const setState = state => () => this.setState(state);
        const closeFullScreenModal = setState({isOpenFullScreenModal: false});
        const openFullScreenModal = setState({isOpenFullScreenModal: true});
        const openBackgroundModal = setState({isOpenBackgroundModal: true});
        const  closeBackgroundModal = setState({isOpenBackgroundModal: false});
        return (
        <div>
            <TextField required>
                <label  appearance="T1.1" for="firstName">Name</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your first name" name="firstName" value={firstName}></Input>
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
                        I&apos;m full screen modal!
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
                <input type="checkbox" onChange={this.checkboxOnChange} name="isBackgroundTabOpen"/>
            </div>
            {isBackgroundTabOpen && 
            <div>
                <div>
                    <input type="color"  name="frontSideBackgroundcolor" onChange={this.inputOnChange} value={frontSideBackgroundcolor}/>
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
                            I&apos;m background screen modal!
                        </MessageBoxFunctionalLayout>
                    </Modal>
                </div>
            </div>
            }
        </div>)
    }
}
