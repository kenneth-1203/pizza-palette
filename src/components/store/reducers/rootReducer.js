import authReducer from './authReducer';
import productReducer from './productReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    firestore: firestoreReducer
})

export default rootReducer;