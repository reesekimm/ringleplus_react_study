import { FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS, FETCH_REVIEW_FAILURE } from "./reviewTypes";
import { fetchReviewRequest, fetchReviewSuccess, fetchReviewFailure } from "./reviewActions";

type ReviewAction =
  | ReturnType<typeof fetchReviewRequest>
  | ReturnType<typeof fetchReviewSuccess>
  | ReturnType<typeof fetchReviewFailure>;

type reviewState = {
  loading: boolean;
  error: string;
  script: object;
  suggestions: object;
  feedback: object;
  analysis: object;
};

const initialState: reviewState = {
  loading: false,
  error: "",
  script: {},
  suggestions: {},
  feedback: {},
  analysis: {},
};

const reviewReducer = (state = initialState, action: ReviewAction) => {
  switch (action.type) {
    case FETCH_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REVIEW_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
      };
    case FETCH_REVIEW_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
