import { formConstants } from '../constants'

const initialState = {
    isFrontSideSelected: true,
    name: '',
    lastName: '',
    telephone: '',
    email: '',
    title: '',
    companyName: '',
}

export function form(state = initialState, action) {
    switch (action.type) {
        case formConstants.CHANGE_INPUT_VALUE:
            const key = Object.keys(action)[1]
            return { ...state, [key]: action[key] }
        default:
            return state
    }
}