import * as actionTypes from "../actions/actionTypes";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_ERROR:
      return {
        ...state,
        authError: "Incorrect email address or password!",
      };
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGNOUT_SUCCESS:
      return state;
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        authError: false,
      };
    case actionTypes.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        authError: action.err.message,
      };
    case actionTypes.DELETE_USER_ERROR:
      return {
        ...state,
        authError: action.err.message,
      };
    case actionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.REMOVE_FROM_FAVORITES_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.REMOVE_FROM_FAVORITES_ERROR:
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
