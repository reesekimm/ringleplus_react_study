import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

interface NestedData {
  title: string;
  contents: JSX.Element;
}

interface Data {
  text: string;
  icon: JSX.Element;
  feedback: NestedData;
  contents?: NestedData;
}

interface SuggestionProps {
  data: Data;
}

const SuggestionCard: React.FC<SuggestionProps> = ({
  data: { text, icon, feedback, contents },
}) => {
  const classes = useStyles();
  const [feedbackExpanded, setFeedbackExpanded] = useState(false);
  const [contentsExpanded, setContentsExpanded] = useState(false);

  const handleExpandClickFeedback = () => {
    setFeedbackExpanded(!feedbackExpanded);
  };

  const handleExpandClickContents = () => {
    setContentsExpanded(!contentsExpanded);
  };

  return (
    <div className="suggestion-card">
      <Card className={classes.root}>
        <div>
          <div>{text}</div>
          <span>{icon}</span>
        </div>
        <CardActions disableSpacing>
          <Typography>{feedback.title}</Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: feedbackExpanded,
            })}
            onClick={handleExpandClickFeedback}
            aria-expanded={feedbackExpanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={feedbackExpanded} timeout="auto" unmountOnExit>
          {feedback.contents}
        </Collapse>
        <CardActions disableSpacing>
          <Typography>{contents.title}</Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: contentsExpanded,
            })}
            onClick={handleExpandClickContents}
            aria-expanded={contentsExpanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={contentsExpanded} timeout="auto" unmountOnExit>
          {contents.contents}
        </Collapse>
      </Card>
    </div>
  );
};

export default SuggestionCard;
