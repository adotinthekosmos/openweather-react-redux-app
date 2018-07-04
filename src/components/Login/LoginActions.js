import LoginActionTypes from "./LoginActionTypes";
export const authenticateLogin = (redirectStatus, fieldIsEmpty) => ({
  type: LoginActionTypes.authLogin,
  payload: {
    redirectToReferrer: redirectStatus,
    fieldIsEmpty: fieldIsEmpty
  }
});
