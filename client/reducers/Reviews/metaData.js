import Redux from "redux";

const initialState = {
  ratings: {},
  characteristics: {},
  recomemded: {}
};
const metaDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_META_DATA":
      return action.metaData;
    default:
      return state;
  }
};
export default metaDataReducer;
