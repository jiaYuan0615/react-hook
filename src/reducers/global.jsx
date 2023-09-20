const initialState = {
  isMobile: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SAVE_isMobile':
      console.log(123)
      return { ...state, isMobile: payload };
    default:
      return state;
  }
};
