import LoginActionTypes from "./LoginActionTypes";
const LoginReducers = (
  state = {
    redirectToReferrer: false,
    fieldIsEmpty: true
  },
  action
) => {
  switch (action.type) {
    case LoginActionTypes.authLogin: {
      return {
        ...state,
        redirectToReferrer: action.payload.redirectToReferrer,
        fieldIsEmpty: action.payload.fieldIsEmpty
      };
    }
    default:
      return state;
  }
};

export default LoginReducers;
