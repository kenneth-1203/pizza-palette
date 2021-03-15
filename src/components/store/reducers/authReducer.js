import * as actionTypes from "../actions/actionTypes";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      console.log("Login error!");
      return {
        ...state,
        authError: "Incorrect email address or password!",
      };
    case actionTypes.LOGIN_SUCCESS:
      console.log("Login success!");
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGNOUT_SUCCESS:
      console.log("Signed out successfully.");
      return state;
    case actionTypes.SIGNUP_SUCCESS:
      console.log("Signup successfully.");
      return {
        ...state,
        authError: null
      }
    case action.SIGNUP_ERROR:
      console.log("Signup error!");
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
};

export default authReducer;
