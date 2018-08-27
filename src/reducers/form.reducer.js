import {formConstants} from '../constants'

const initialState = {
    name: '',
    lastName: '',
    logo: undefined,
    telephone: '',
    email: '',
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
            console.log(action);
            return  {...state,[key]:action[key]}
        case formConstants.GET_INPUT_VALUES:
            return state;
        default:
            return state;
    }
}