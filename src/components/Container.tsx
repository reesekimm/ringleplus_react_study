import React from "react";
import { Grid, Typography } from "@material-ui/core";

interface Options {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
  contents: JSX.Element | string;
}

interface ContainerProps {
  options: Options;
}

const Container: React.FC<ContainerProps> = ({
  options: { icon, title, description, contents },
}) => {
  return (
    <div className="container__wrapper">
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            {icon}
            <Typography>{title}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <div>{contents}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Container;
