import { combineReducers } from 'redux'
import { form } from './form.reducer'

const appReducer = combineReducers({
    form,
})

const rootReducer = (state,action) =>{
    if(action.type === "CLEAR_STATE"){
        state = undefined
    }
    return appReducer(state,action)
}

export default rootReducer