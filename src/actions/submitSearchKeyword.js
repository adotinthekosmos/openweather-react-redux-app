import Constants from "../constants/constants";

const submitSearchKeyword = keyword => ({
  type: Constants.submitSearch,
  payload: {
    keyword: keyword
  }
});

export default submitSearchKeyword;
