import { combineReducers } from 'redux';
import { reducer as formReducer } from  'redux-form'; //rename the reducer to formReducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});