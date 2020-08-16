const toast = (state = {}, action) => {
  switch (action.type) {
    case "SET_TOAST":
      return action.payload;
    case "SET_TOAST_NULL":
      return {};
    default:
      return state;
  }
};
export default toast;
