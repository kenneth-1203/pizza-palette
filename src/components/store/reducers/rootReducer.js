import authReducer from './authReducer';
import productReducer from './productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer
})

export default rootReducer;