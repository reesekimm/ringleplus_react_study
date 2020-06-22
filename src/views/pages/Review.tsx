import React from "react";
import Header from "@/common/Header";
import ReviewBody from "@/review/ReviewBody";
import { Grid } from "@material-ui/core";

const headerTitle =
  "What are you getting into it? – Notes from a start-up founder: Immersion and concentration";

const Review: React.FC = () => {
  return (
    <Grid container direction="column">
      <Header title={headerTitle} />
      <ReviewBody />
    </Grid>
  );
};

export default Review;
