import React from 'react';
import Button from 'wix-style-react/Button';
import Modal from 'wix-style-react/Modal'
import ColorPicker from 'wix-style-react/ColorPicker';
import {MessageBoxFunctionalLayout} from 'wix-style-react/MessageBox';
import {ImageModalContainer} from './imageModal.container';

export class BackgroundContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpenBackgroundModal: false,
            isBackgroundTabOpen:false
        }
    }
    render(){
        const {changeColorBackground,imageType,image,color} = this.props
        const setState = state => () => this.setState(state)
        const openBackgroundModal = setState({isOpenBackgroundModal: true})
        const closeBackgroundModal = setState({isOpenBackgroundModal: false})
        return (<div>
            <div>
                <ColorPicker
                    onCancel={() => "Cancelled"}
                    onChange={e => e.hex()}
                    onConfirm={changeColorBackground}
                    showConverter={false}
                    value={color}
                />
                <label  for="isBackgroundTabOpen">Color</label>
            </div>
            <div>
                {!image && <div style={{float:'left',height:'50px',width:'50px',backgroundColor:color}}></div>}
                {image && <img src={image} style={{float:'left',height:'50px',width:'50px'}}/>}
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
                        <ImageModalContainer imageType={imageType}/>
                    </MessageBoxFunctionalLayout>
                </Modal>
            </div>
        </div>)
    }
}


































