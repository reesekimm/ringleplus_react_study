import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchReviewData } from "Redux/review/reviewActions";
import Header from "@/common/Header";
import ReviewBody from "@/review";
import { Grid } from "@material-ui/core";

const headerTitle =
  "What are you getting into it? – Notes from a start-up founder: Immersion and concentration";

type ReviewData = {
  loading: boolean;
  error: string;
};

type ReviewProps = {
  reviewData: ReviewData;
  fetchReviewData: any;
};

const Review: React.FC<ReviewProps> = ({ reviewData: { loading, error }, fetchReviewData }) => {
  useEffect(() => {
    fetchReviewData();
  }, []);

  return loading ? (
    <h2>loading...</h2>
  ) : error ? (
    <h2>error</h2>
  ) : (
    <Grid container direction="column">
      <Header title={headerTitle} />
      <ReviewBody />
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  return {
    reviewData: state.review,
  };
};

export default connect(mapStateToProps, { fetchReviewData })(Review);
