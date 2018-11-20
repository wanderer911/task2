import { combineReducers } from 'redux'
import { form } from './form.reducer'
import { flickr } from './flickr.reducer'

const appReducer = combineReducers({
    form,
    flickr
})

const rootReducer = (state,action) =>{
    if(action.type === "CLEAR_STATE"){
        state = undefined
    }
    return appReducer(state,action)
}

export default rootReducer