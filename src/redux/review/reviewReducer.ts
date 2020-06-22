import { FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS, FETCH_REVIEW_FAILURE } from "./reviewTypes";

const initialState = {
  loading: false,
  error: "",
  script: {},
  suggestions: {},
  feedback: {},
  analysis: {},
};

interface Action {
  type: string;
  payload: object;
}

const reviewReducer = (state = initialState, { type, payload }: Action): object => {
  switch (type) {
    case FETCH_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REVIEW_SUCCESS:
      return {
        loading: false,
        payload: payload,
      };
    case FETCH_REVIEW_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
