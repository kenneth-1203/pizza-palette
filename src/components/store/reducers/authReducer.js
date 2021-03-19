import * as actionTypes from "../actions/actionTypes";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authError: "Incorrect email address or password!",
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGNOUT_SUCCESS:
      return state;
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
};

export default authReducer;
