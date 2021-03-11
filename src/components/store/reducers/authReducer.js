const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login error!");
      return {
        ...state,
        authError: "Incorrect email address or password!",
      };
    case "LOGIN_SUCCESS":
      console.log("Login success!");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signed out successfully.");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup successfully.");
      return {
        ...state,
        authError: null
      }
    case "SIGNUP_ERROR":
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
