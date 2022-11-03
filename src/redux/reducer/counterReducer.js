const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment": {
      console.log("state", state);
      return { ...state, counter: state.counter + 1 };
    }
    case "Decrement": {
      console.log("state", state);
      return { ...state, counter: state.counter - 1 };
    }
    default:
      return state;
  }
};
