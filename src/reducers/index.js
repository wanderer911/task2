import { combineReducers } from 'redux';
import { form } from './form.reducer';
import { visibility } from './visibility.reducer';

const rootReducer = combineReducers({
    form,
    visibility
});

export default rootReducer;