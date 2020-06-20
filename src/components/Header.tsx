import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Grid item>
      <AppBar position="static">
        <Toolbar>
          <ArrowBackIosIcon />
          <Typography variant="subtitle1">{title}</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
