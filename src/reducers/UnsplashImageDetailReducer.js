import { SAVE_IMAGE_OBJECT } from "../actions/UnsplashImageDetailAction";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_IMAGE_OBJECT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
