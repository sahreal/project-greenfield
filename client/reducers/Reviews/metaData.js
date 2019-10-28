import Redux from "redux";

const initialState = {
  ratings: {},
  characteristics: {
    Comfort: { id: 3, value: "" },
    Fit: { id: 1, value: "" },
    Length: { id: 2, value: "" },
    Quality: { id: 4, value: "" }
  },
  recommended: {}
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
