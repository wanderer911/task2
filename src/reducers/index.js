import { combineReducers } from 'redux'
import { form } from './form.reducer'
import { flickr } from './flickr.reducer'

const rootReducer = combineReducers({
    form,
    flickr
});

export default rootReducer;