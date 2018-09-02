import React from 'react'
import Button from 'wix-style-react/Button'
import Modal from 'wix-style-react/Modal'
import ColorPicker from 'wix-style-react/ColorPicker'
import { MessageBoxFunctionalLayout } from 'wix-style-react/MessageBox'
import { ImageModalContainer } from './imageModal.container'
import { flickrActions } from '../actions'
import { connect } from 'react-redux'

class BackgroundContainer extends React.Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            isOpenBackgroundModal: false,
            isBackgroundTabOpen: false
        }
    }

    closeModal() {
        const { dispatch } = this.props
        this.setState({ isOpenBackgroundModal: false })
        dispatch(flickrActions.clearImagesArray())
    }

    render() {
        const { changeColorBackground, imageType, image, color } = this.props
        const { closeModal } = this
        const setState = state => () => this.setState(state)
        const openBackgroundModal = setState({ isOpenBackgroundModal: true })
        return (<div>
            {color && <div>
                <ColorPicker
                    onCancel={() => "Cancelled"}
                    onChange={e => e.hex()}
                    onConfirm={changeColorBackground}
                    showConverter={false}
                    value={color}
                />
                <label for="isBackgroundTabOpen">Color</label>
            </div>}
            <div>
                {!image && <div style={{ float: 'left', height: '50px', width: '50px', backgroundColor: color ? color : 'green' }}></div>} {/* if no image show just green square in input part*/}
                {image && <img src={image} style={{ float: 'left', height: '50px', width: '50px' }} />}
                <p>Image </p>
                <Button onClick={openBackgroundModal} dataHook="open-background-modal-button">Choose</Button>
                <Modal
                    isOpen={this.state.isOpenBackgroundModal}
                    onRequestClose={closeModal}
                    contentLabel="Background modal example"
                >
                    <MessageBoxFunctionalLayout
                        cancelText="Cancel"
                        confirmText="OK"
                        dataHook="background-modal"
                        fullscreen
                        onCancel={closeModal}
                        onOk={closeModal}
                        theme="blue"
                        title="Full screen modal"
                    >
                        <ImageModalContainer imageType={imageType} />
                    </MessageBoxFunctionalLayout>
                </Modal>
            </div>
        </div>)
    }
}


const connectedBackgroundContainer = connect()(BackgroundContainer)
export { connectedBackgroundContainer as BackgroundContainer }




























