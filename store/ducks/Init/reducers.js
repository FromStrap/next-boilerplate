import * as type from "./types";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.INCREMENT:
      return { count: state.count + 1 };
    case type.DECREMENT:
      return { count: state.count - 1 };
    case type.RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;
