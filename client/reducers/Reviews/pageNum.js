import Redux from "redux";

const pageNumReducer = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_Page_Num":
      return action.pageNum;
    default:
      return state;
  }
};
export default pageNumReducer;
