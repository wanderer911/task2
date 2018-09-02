import React from 'react'
import Input from 'wix-style-react/Input'
import TextField from 'wix-style-react/TextField'
import _ from 'lodash'
import { ImageListComponent } from '../components/imageList.component'
import { connect } from 'react-redux'
import { formActions, flickrActions } from '../actions'

class ImageModalContainer extends React.Component {
    constructor(props) {
        super(props)
        this.inputOnChange = this.inputOnChange.bind(this)
        this.fetchByTag = this.fetchByTag.bind(this)
        this.throttled = _.throttle(this.fetchByTag, 2000).bind(this)
        this.onImageSelect = this.onImageSelect.bind(this)
        this.state = {
            searchKeyWord: '',
            currentlySelectedImg: undefined
        }
    }
    onImageSelect(e) {
        this.setState({ currentlySelectedImg: e.target.src })
        this.props.dispatch(formActions.changeInputValue(this.props.imageType, e.target.src))
        console.log(e.target.src)
    }

    inputOnChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.throttled(event.target.value)
    }
    fetchByTag(value) {
        if (value.length > 2 && value.slice(0, 4) !== 'http') {
            this.props.dispatch(flickrActions.fetchByTag(value))
        }
    }
    render() {
        const { searchKeyWord, currentlySelectedImg } = this.state
        const { flickr } = this.props
        let result
        if (flickr.loading) {
            result = <p>Loading ...</p>
        } else if (flickr.error) {
            result = <p>{flickr.error}</p>
        } else if (flickr.images !== undefined) {
            result = <ImageListComponent onClick={this.onImageSelect} images={flickr.images} selectedImage={currentlySelectedImg} />
        } else {
            result = <p>No images to show</p>
        }
        return (
            <div>
                <TextField required>
                    <label appearance="T1.1" for="lastName">Last name</label>
                    <Input onChange={this.inputOnChange} placeholder="Please type in your last name" name="searchKeyWord" value={searchKeyWord}></Input>
                </TextField>
                {result}
            </div>)
    }
}
const mapStateToProps = state => ({
    flickr: state.flickr
})


const connectedImageModalContainer = connect(mapStateToProps)(ImageModalContainer)
export { connectedImageModalContainer as ImageModalContainer }