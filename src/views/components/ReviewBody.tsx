import React from "react";
import { Grid } from "@material-ui/core";
import Container from "./Container";
import * as options from "Const/containerOptions";

const ReviewBody: React.FC = () => (
  <div className="review-body__wrapper">
    <Grid item container spacing={2}>
      <Grid item container xs={12} md={7} direction="column" spacing={2}>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Container options={options.chat} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Container options={options.suggestions} />
          </Grid>
        </Grid>
        <Grid item>audio controller</Grid>
      </Grid>
      <Grid item container xs={12} md={5} direction="column" spacing={2}>
        <Grid item>
          <Container options={options.feedback} />
        </Grid>
        <Grid item>
          <Container options={options.chart} />
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default ReviewBody;
