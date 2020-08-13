const policies = (state = [], action) => {
  switch (action.type) {
    case 'SET_POLICIES':
      return [...action.payload];
    default:
      return state;
  }
}

export default policies;