import {visibilityContants} from '../constants'


export const visibilityActions = {
    toggleFrontVisibility,
    toggleBackVisibility,
    toggleSideVisibility,
    getAllVisibilities
}



function toggleFrontVisibility(){
    return dispatch=>{
        dispatch({type:visibilityContants.TOGGLE_FRONT})
    }
}

function toggleBackVisibility(){
    return dispatch=>{
        dispatch({type:visibilityContants.TOGGLE_BACK})
    }
}

function toggleSideVisibility(){
    return dispatch=>{
        dispatch({type: visibilityContants.TOGGLE_SIDE})
    }
}

function getAllVisibilities(){
    return dispatch=>{
        dispatch({type: visibilityContants.GET_ALL_VISIBILITIES})
    }
}
