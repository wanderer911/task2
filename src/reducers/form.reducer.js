import {formConstants} from '../constants'

const initialState = {
    name: '',
    lastName: '',
    logo: undefined,
    telephone: '',
    email: '',
    title: '',
    frontBackgroundColor: '#FFFFFF',
    frontBackgroundImage: undefined,
    companyName: '',
    backBackroundColor: '#FFFFFF',
    backBackgroundImage: undefined
}
export function form(state=initialState,action){
    switch(action.type){
        case formConstants.CHANGE_INPUT_VALUE:
            const key = Object.keys(action)[1]
            return  {...state,[key]:action[key]}
        default:
            return state;
    }
}