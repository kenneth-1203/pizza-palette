import authReducer from './authReducer';
import productReducer from './productReducer';
import shopReducer from "./shopReducer";
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    shop: shopReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;