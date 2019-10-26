import Redux from "redux";

const metaDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_META_DATA":
      return action.metaData;
    default:
      return state;
  }
};
export default metaDataReducer;
