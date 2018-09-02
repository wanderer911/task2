import {formConstants} from '../constants'

export const formActions = {
    changeInputValue,
}

function changeInputValue(name,value){
    return {type:formConstants.CHANGE_INPUT_VALUE,[name]:value}
}

