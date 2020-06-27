import React from "react";
import { Grid } from "@material-ui/core";
import Suggestions from "./Suggestions";
import Feedback from "./Feedback";
import Container from "@/common/Container";
import * as options from "Const/containerOptions";

const ReviewBody: React.FC = () => (
  <div className="review-body__wrapper">
    <Grid item container spacing={2} style={{ height: "100%" }}>
      <Grid item container xs={12} md={7} direction="column" spacing={2} justify="space-between">
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Container options={options.chat} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Suggestions />
          </Grid>
        </Grid>
        <Grid item>audio controller</Grid>
      </Grid>
      <Grid item container xs={12} md={5} direction="column" spacing={2}>
        <Grid item>
          <Feedback />
        </Grid>
        <Grid item>
          <Container options={options.chart} />
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default ReviewBody;
