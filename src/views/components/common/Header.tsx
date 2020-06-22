import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  headerTextStyle: {
    fontSize: "22px",
  },
});

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <AppBar position="static">
        <Toolbar>
          <ArrowBackIosIcon />
          <Typography variant="h2" className={classes.headerTextStyle}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
