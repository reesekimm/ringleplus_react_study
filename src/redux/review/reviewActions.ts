import { FETCH_REVIEW_REQUEST, FETCH_REVIEW_SUCCESS, FETCH_REVIEW_FAILURE } from "./reviewTypes";

export const fetchReviewRequest = (): object => {
  return {
    type: FETCH_REVIEW_REQUEST,
  };
};

export const fetchReviewSuccess = (data: object): object => {
  return {
    type: FETCH_REVIEW_SUCCESS,
    payload: data,
  };
};

export const fetchReviewFailure = (error: string): object => {
  return {
    type: FETCH_REVIEW_FAILURE,
    payload: error,
  };
};

const urls = [
  `${process.env.BASE_URL}script`,
  `${process.env.BASE_URL}suggestions`,
  `${process.env.BASE_URL}feedback`,
  `${process.env.BASE_URL}analysis`,
];

const getResponse = async (url: string) => {
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const resPromise = await response.json();
  return resPromise;
};

export const fetchReviewData = () => async (dispatch: any) => {
  dispatch(fetchReviewRequest());
  try {
    const data = await Promise.all(urls.map(getResponse));
    console.log(data);
    // dispatch(fetchReviewSuccess(data));
  } catch (e) {
    console.log(e);
    // dispatch(fetchReviewFailure(""))
  }
};
