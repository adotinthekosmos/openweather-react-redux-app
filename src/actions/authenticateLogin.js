import Constants from "../constants/constants";
const authenticateLogin = (redirectStatus, fieldIsEmpty) => ({
  type: Constants.authLogin,
  payload: {
    redirectToReferrer: redirectStatus,
    fieldIsEmpty: fieldIsEmpty
  }
});

export default authenticateLogin;
