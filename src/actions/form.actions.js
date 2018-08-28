import {formConstants} from '../constants'

export const formActions = {
    changeInputValue,
    //getInputValues
}

// function getInputValues(){
//     return dispatch=>{
//         dispatch({type:formConstants.GET_INPUT_VALUES});
//     }
// }

function changeInputValue(name,value){
    return dispatch=>{
        dispatch({type:formConstants.CHANGE_INPUT_VALUE,[name]:value})
    }
}

