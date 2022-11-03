const initialState = {
  isLoading: false,
  fetchedData: "No data at present",
  error: null,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Start": {
      return { ...state, isLoading: (state.isLoading = true) };
    }
    case "Success": {
      return {
        ...state,
        isLoading: (state.isLoading = false),
        fetchedData: action.payload,
        isLoading: (state.isLoading = false),
      };
    }
    case "Failure": {
      return {
        ...state,
        isLoading: (state.isLoading = false),
        error: action.payload,
        isLoading: (state.isLoading = false),
      };
    }
    default: {
      return state;
    }
  }
};
