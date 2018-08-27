import React from 'react';
import {searchPhotoService} from '../services';
import Input from 'wix-style-react/Input';
import TextField from 'wix-style-react/TextField';
import _ from 'lodash';
import {ImageListComponent} from '../components/imageList.component';

export class ImageModalContainer extends React.Component {
    constructor(props){
        super(props);
        this.inputOnChange = this.inputOnChange.bind(this);
        this.fetchByTag = this.fetchByTag.bind(this);
        this.throttled =  _.throttle(this.fetchByTag,2000).bind(this);
        this.onImageSelect = this.onImageSelect.bind(this);
        this.state = {
            searchKeyWord:'',
            urls:[],
            currentlySelectedImg:undefined
        }
    }
    onImageSelect(e){
        this.setState({currentlySelectedImg:e.target.src});
        console.log(e.target.src)
    }
    inputOnChange(e){
        const {name,value} = e.target;
        // console.log(name,value,this.state);
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
        return (
        <div>    
            <TextField required>
                <label  appearance="T1.1" for="lastName">Last name</label>
                <Input  onChange={this.inputOnChange}  placeholder="Please type in your last name" name="searchKeyWord" value={searchKeyWord}></Input>
            </TextField>
            {urls.length &&
                urls.map(url=><ImageListComponent onClick={this.onImageSelect} url={url} selectedUrl={currentlySelectedImg}/>)
            }
        </div>)
    }
}


function toUrl(data){
    return `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`;
}