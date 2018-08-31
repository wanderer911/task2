import React from 'react';
import {searchPhotoService} from '../services';
import Input from 'wix-style-react/Input';
import TextField from 'wix-style-react/TextField';
import _ from 'lodash';
import {ImageListComponent} from '../components/imageList.component';
import { connect } from 'react-redux';
import { formActions,visibilityActions} from '../actions'

class ImageModalContainer extends React.Component {
    constructor(props){
        super(props);
        this.inputOnChange = this.inputOnChange.bind(this);
        this.fetchByTag = this.fetchByTag.bind(this);
        this.throttled =  _.throttle(this.fetchByTag,2000).bind(this); //here
        this.onImageSelect = this.onImageSelect.bind(this);
        this.state = {
            searchKeyWord:'',
            urls:[],
            currentlySelectedImg:undefined
        }
    }
    onImageSelect(e){
        this.setState({currentlySelectedImg:e.target.src});
        this.props.dispatch(formActions.changeInputValue(this.props.imageType,e.target.src))
        console.log(e.target.src)
    }

    inputOnChange(e){
        const {name,value} = e.target;
        this.setState({ [name]: value });
        this.throttled(event.target.value);
    }
    fetchByTag(value){
        const that = this;
        if(value.length>2 && value.slice(0,4)!=='http'){
            searchPhotoService.fetchByTag(value).then(json=>{
                that.setState({urls:json.photos.photo.slice(0,10).map(toUrl)});
            });
        }
    }
    render(){
        const {searchKeyWord,urls,currentlySelectedImg} = this.state;
        const 
        return (
        <div>    
            <TextField required>
                <label  appearance="T1.1" for="lastName">Last name</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your last name" name="searchKeyWord" value={searchKeyWord}></Input>
            </TextField>
            <ImageListComponent onClick={this.onImageSelect} images={images} selectedImage={currentlySelectedImg}/>
        </div>)
    }
}



const connectedImageModalContainer = connect()(ImageModalContainer);
export {connectedImageModalContainer as ImageModalContainer};

function toUrl(data){
    return `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`;
}