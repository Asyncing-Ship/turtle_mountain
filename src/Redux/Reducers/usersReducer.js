// This stores all of our users
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return action.payload;
    case "UNSET_ALL_USERS":
      return [];
    default:
      return state;
  }
};

export default usersReducer;
