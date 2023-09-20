const initialState = {
  auth: undefined,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SAVE_Auth':
      return { ...state, auth: payload };
    default:
      return state;
  }
};
