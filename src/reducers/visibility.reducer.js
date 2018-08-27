import {visibilityContants} from '../constants'

const initialState = {
    frontVisilibility: false,
    backVisibility: false,
    sideVisibility: true
}
export function visibility(state=initialState,action){
    switch(action.type){
        case visibilityContants.TOGGLE_BACK:
            return {...state,backVisibility: !state.backVisibility}
        case visibilityContants.TOGGLE_FRONT:
            return {...state,frontVisilibility: !state.frontVisilibility}
        case visibilityContants.TOGGLE_SIDE:
            return {...state,sideVisibility: !state.sideVisibility}
        default:
            return state;
    }
}